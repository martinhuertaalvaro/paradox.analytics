import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../../../../auth/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  protected userSvc = inject(UserService);
  protected authSvc = inject(AuthService);
  public user: User = {};
  async ngOnInit() {
    this.user = await lastValueFrom(
      this.userSvc.getUserInfo(this.authSvc.getUserFromAccesToken())
    );
  }
}
