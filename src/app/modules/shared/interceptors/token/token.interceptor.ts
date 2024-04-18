import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _authService = inject(AuthService);
  const token = _authService.getAccessToken();
  const tenantId = _authService.getTenantId();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token.token}`,
      },
      setParams: {
        tenantId: tenantId,
      },
    });
  }
  return next(req);
};
