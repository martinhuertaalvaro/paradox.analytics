import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _authService = inject(AuthService);
  const token = _authService.getAccessToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token.token}`,
      },
    });
  }
  return next(req);
};
