import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { LogoutService } from '../../services/logout/logout.service';
import { ToastService } from '../../services/toast/toast.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _authService = inject(AuthService);
  const logoutSvc = inject(LogoutService);
  const toastSvc = inject(ToastService);
  const token = _authService.getAccessToken();
  const tenantId = _authService.getTenantId();

  if (token) {
    let decodedToken = jwtDecode(token.token);
    const isExpired =
      decodedToken && decodedToken.exp
        ? decodedToken.exp < Date.now() / 1000
        : false;
    if (isExpired) {
      logoutSvc.logout();
      toastSvc.create('error', 'Session Expired', 'Login to use again');
    } else {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token.token}`,
        },
        setParams: {
          tenantId: tenantId,
        },
      });
    }
  }
  return next(req);
};
