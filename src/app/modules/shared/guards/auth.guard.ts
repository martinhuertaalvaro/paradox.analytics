import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

class AuthAcces {
  public router = inject(Router);

  canActivate(): any {
    const token = inject(AuthService).getAccessToken();
    if (token) {
      this.router.navigate(['/core']);
      return false;
    } else {
      return true;
    }
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const authAcces = new AuthAcces();
  return authAcces.canActivate();
};
