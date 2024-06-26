import { Component, ViewChild, inject } from '@angular/core';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../auth/services/auth.service';
import { ToastService } from '../../../../../shared/services/toast/toast.service';
import { lastValueFrom } from 'rxjs';
import { ManagementService } from '../../services/management.service';
import { User } from '../../../user/interfaces/user';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [PrimeNgModule, CommonModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent {
  constructor(private confirmationService: ConfirmationService) {}
  public managementSvc = inject(ManagementService);
  private authSvc = inject(AuthService);
  public users: User[] = [];
  public selectedUsers!: User;
  public searchValue: string | undefined;
  public visible: boolean = false;
  public userForModal: any;
  public user: any;
  public toastSvc = inject(ToastService);
  private friends: any;
  public areFriends: boolean = false;
  @ViewChild('dt1') dt1: any;
  @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;

  async ngOnInit(): Promise<any> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.initConfig();
  }

  private async initConfig() {
    this.users = await lastValueFrom(this.managementSvc.getAllUsers());
    this.user = this.users.find(
      (user) => user.email === this.authSvc.getUserFromAccesToken()
    );
    const index = this.users.findIndex(
      (usuario) => usuario.email === this.user.email
    );
    this.users.splice(index, 1);
  }

  public filterGLobal(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }

  public async editActivity(id: any) {
    let user = this.users.find((u) => u.id == id);
    if (user) {
      let req = { email: user.email };
      let res = await lastValueFrom(this.managementSvc.editActive(req));
      console.log(res);
      user.active = !user.active;
    }
  }

  public async addAdminRole(id: any) {
    let user = this.users.find((u) => u.id == id);
    if (user) {
      let req = { email: user.email };
      let res = await lastValueFrom(this.managementSvc.addAdmin(req));
      console.log(res);
      user.roles = ['ROLE_ADMIN'];
      this.toastSvc.create('success', 'PARADOX', res.status);
    }
  }

  public async removeAdminRole(id: any) {
    let user = this.users.find((u) => u.id == id);
    if (user) {
      let req = { email: user.email };
      let res = await lastValueFrom(this.managementSvc.deleteAdmin(req));
      console.log(res);
      user.roles = ['ROLE_USER'];
      this.toastSvc.create('success', 'PARADOX', res.status);
    }
  }

  public async deleteUser(id: any) {
    let user = this.users.find((u) => u.id == id);
    if (user) {
      let req = { email: user.email };
      let res = await lastValueFrom(this.managementSvc.deleteUser(req));
      console.log(res);
      this.users = this.users.filter((u) => u.email !== user?.email);
      this.toastSvc.create('success', 'PARADOX', res.status);
    }
  }

  public showDialog(user: any) {
    this.userForModal = user;
    this.visible = true;
  }

  //confirm popup
  accept() {
    this.confirmPopup.accept();
  }

  reject() {
    this.confirmPopup.reject();
  }

  confirm(event: Event, bool: boolean, id?: any, mode?: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to proceed?',
      accept: () => {
        if (bool == true) {
          this.deleteUser(id);
        } else {
          if (mode == 'add') this.addAdminRole(id);
          if (mode == 'delete') this.removeAdminRole(id);
        }
      },
      reject: () => {
        this.toastSvc.create('warn', 'Interrupted', 'Operation cancelled');
      },
    });
  }

  public consoleLog(): void {
    console.log('id');
  }
}
