import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private userSvc = inject(UserService);

  async ngOnInit() {
    const user = await lastValueFrom(this.userSvc.getAllTenants());
    console.log(user);
  }
}
