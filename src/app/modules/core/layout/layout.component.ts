import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ZorroNgModule } from '../../ng-zorro/zorro-ng.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../pages/user/services/user.service';
import { AuthService } from '../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  isCollapsed: boolean = false;
  isAzure: boolean = false;

  private authSvc = inject(AuthService);
  public user: string = this.authSvc.getUserFromAccesToken().toUpperCase();

  async ngOnInit() {}

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
