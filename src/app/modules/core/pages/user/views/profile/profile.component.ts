import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription, find, lastValueFrom } from 'rxjs';
import { AuthService } from '../../../../../auth/services/auth.service';
import { User } from '../../interfaces/user';
import { ZorroNgModule } from '../../../../../ng-zorro/zorro-ng.module';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';
import { CommonModule } from '@angular/common';
import { TerminalService } from 'primeng/terminal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ZorroNgModule, PrimeNgModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public subscription: Subscription;
  public user: User = {};
  public show: boolean = false;

  private commandHandlers: { [key: string]: (args?: string) => any } = {
    date: () => new Date().toDateString(),
    time: () => new Date().toLocaleTimeString(),
    help: () =>
      'Available Commands: ' + Object.keys(this.commandHandlers).join(' '),
    user: (args) => {
      if (args == null || args == '' || args == undefined) {
        return 'Options: (user + field) all,' + Object.keys(this.user);
      } else {
        if (args == 'all') {
          return JSON.stringify(this.user);
        } else {
          if (args in this.user) {
            return this.user[args];
          }
        }
      }
      return 0;
    },
    redirect: (args) => {
      if (args == null || args == '' || args == undefined) {
        return 'Redirect: Need route';
      } else {
        if (args == 'admin') {
          this.router.navigate(['/core/admin']);
        } else if (args == 'analytics') {
          this.router.navigate(['/core/analytics']);
        } else if (args == 'members') {
          this.router.navigate(['/core/members']);
        } else if (args == 'home') {
          this.router.navigate(['/core/home']);
        } else {
          return 'Redirect: Route not found';
        }
      }
      return 0;
    }, // Lógica para limpiar la terminal
    greet: () => {
      const currentTime = new Date().getHours();
      if (currentTime < 12) {
        return 'Good morning!';
      } else if (currentTime < 18) {
        return 'Good afternoon!';
      } else {
        return 'Good evening!';
      }
    },
    // Agrega más comandos aquí según sea necesario
  };

  constructor(
    private terminalService: TerminalService,
    private userSvc: UserService,
    private authSvc: AuthService,
    private router: Router
  ) {
    this.subscription = this.terminalService.commandHandler.subscribe(
      (input: string) => {
        const [command, ...args] = input.split(' ');
        const response: any = this.executeCommand(command, args.join(' '));
        this.terminalService.sendResponse(response);
      }
    );
  }

  async ngOnInit() {
    this.user = await lastValueFrom(
      this.userSvc.getUserInfo(this.authSvc.getUserFromAccesToken())
    );
    this.show = true;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private executeCommand(command: string, args: string): any {
    const handler = this.commandHandlers[command];
    return handler ? handler(args) : 'Unknown command: ' + command;
  }

  public createPrompt() {
    return this.user.email?.split('@')?.[0];
  }
}
