import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription, lastValueFrom } from 'rxjs';
import { AuthService } from '../../../../../auth/services/auth.service';
import { User } from '../../interfaces/user';
import { ZorroNgModule } from '../../../../../ng-zorro/zorro-ng.module';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';
import { CommonModule } from '@angular/common';
import { TerminalService } from 'primeng/terminal';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ZorroNgModule, PrimeNgModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public subscription: Subscription;
  constructor(private terminalService: TerminalService) {
    this.subscription = this.terminalService.commandHandler.subscribe(
      (command) => {
        let response =
          command === 'date'
            ? new Date().toDateString()
            : 'Unknown command: ' + command;
        this.terminalService.sendResponse(response);
      }
    );
  }

  protected userSvc = inject(UserService);
  protected authSvc = inject(AuthService);
  public user: User = {};
  public show: boolean = false;
  async ngOnInit() {
    this.user = await lastValueFrom(
      this.userSvc.getUserInfo(this.authSvc.getUserFromAccesToken())
    );
    this.show = true;
  }

  async ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
