import { Component, ViewChild, inject } from '@angular/core';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';
import { EverybodyService } from '../../services/everybody.service';
import { User } from '../../../user/interfaces/user';
import { lastValueFrom } from 'rxjs';
import { Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-everybody',
  standalone: true,
  imports: [PrimeNgModule, CommonModule],
  templateUrl: './everybody.component.html',
  styleUrl: './everybody.component.scss',
})
export class EverybodyComponent {
  public everybodySvc = inject(EverybodyService);
  private authSvc = inject(AuthService);
  public users: User[] = [];
  public selectedUsers!: User;
  public searchValue: string | undefined;
  public visible: boolean = false;
  public userForModal: any;
  public user: any;
  public router: Router = inject(Router);
  public toastSvc = inject(ToastService);
  private friends: any;
  @ViewChild('dt1') dt1: any;

  async ngOnInit(): Promise<any> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.initConfig();
  }

  private async initConfig() {
    this.users = await lastValueFrom(this.everybodySvc.getAllMembers());
    this.user = this.authSvc.getUserFromAccesToken();
    this.user = this.users.find((user) => user.email === this.user);
    const index = this.users.findIndex(
      (usuario) => usuario.email === this.user.email
    );
    this.users.splice(index, 1);
  }

  public filterGLobal(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }

  async showDialog(user: any) {
    this.userForModal = user;
    let req = {
      email: this.user.email,
    };
    this.friends = await lastValueFrom(this.everybodySvc.getAllFriends(req));
    console.log(this.friends);
    this.visible = true;
  }

  public async areFriends(id: any) {
    let bool: boolean = false;

    if (this.friends != null) {
      for (let valor of Object.values(this.friends)) {
        if (bool != true) {
          bool = valor == id ? true : false;
        }
      }
    }

    return bool;
  }

  async makeFriend(id: any) {
    const req = {
      friendId: id,
      email: this.user.email,
    };
    let res = await lastValueFrom(this.everybodySvc.makeFriend(req));
    this.toastSvc.create('success', 'PARADOX', res.status);
  }

  async deleteFriend(id: any) {
    const req = {
      friendId: id,
      email: this.user.email,
    };
    let res = await lastValueFrom(this.everybodySvc.deleteFriend(req));
    this.toastSvc.create('success', 'PARADOX', res.status);
  }
}
