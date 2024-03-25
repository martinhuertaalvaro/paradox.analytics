import { HttpInterceptorFn, ɵHttpInterceptingHandler } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingSvc = inject(LoadingService);
  loadingSvc.show();
  return next(req).pipe(finalize(() => loadingSvc.hide()));
};
