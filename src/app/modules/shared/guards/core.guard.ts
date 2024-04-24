import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

class CoreAcces {
  public router = inject(Router);

  canActivate(): any {
    const token = inject(AuthService).getAccessToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}

export const coreGuard: CanActivateFn = (route, state) => {
  const coreAcces = new CoreAcces();
  return coreAcces.canActivate();
};
