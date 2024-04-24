import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutService extends BaseService {
  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('tenantId');
    localStorage.removeItem('tenantCode');
    this.router.navigate(['/auth']);
  }
}
