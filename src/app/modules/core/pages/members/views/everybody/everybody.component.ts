import { Component, ViewChild, inject } from '@angular/core';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';
import { EverybodyService } from '../../services/everybody.service';
import { User } from '../../../user/interfaces/user';
import { lastValueFrom } from 'rxjs';
import { Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../auth/services/auth.service';

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

  @ViewChild('dt1') dt1: any;

  async ngOnInit(): Promise<any> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users = await lastValueFrom(this.everybodySvc.getAllMembers());
    this.user = this.authSvc.getUserFromAccesToken();
    this.user = this.users.find((user) => user.email === this.user);
    const index = this.users.findIndex(
      (usuario) => usuario.email === this.user.email
    );
    this.users.splice(index, 1);
    console.log(this.users);
  }

  public filterGLobal(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }

  showDialog(user: any) {
    this.userForModal = user;
    this.visible = true;
  }

  public areFriends(id: any) {
    let bool: boolean = false;

    this.user.friends.forEach((friendId: any) => {
      if (bool != true) {
        bool = friendId == id ? true : false;
      }
    });

    return bool;
  }
}
