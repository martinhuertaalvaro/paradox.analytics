import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ZorroNgModule } from '../../ng-zorro/zorro-ng.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../pages/user/services/user.service';
import { AuthService } from '../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { LogoutService } from '../../shared/services/logout/logout.service';
import { lastValueFrom } from 'rxjs';
import { User } from '../pages/user/interfaces/user';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    ZorroNgModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  public isCollapsed: boolean = false;
  private static ADMINKEY = 'ROLE_ADMIN';
  public hasAdminRole: boolean = false;
  public userInfo: User = {};
  private authSvc = inject(AuthService);
  private userSvc = inject(UserService);
  public logoutSvc = inject(LogoutService);
  public user: string = this.authSvc.getUserFromAccesToken().toUpperCase();
  public userRoles: string = this.authSvc.getRolesFromAccesToken();
  async ngOnInit() {
    if (this.userRoles[0] == LayoutComponent.ADMINKEY) {
      this.hasAdminRole = true;
    }
    console.log(this.userInfo);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
