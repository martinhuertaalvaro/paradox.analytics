import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutService extends BaseService {
  public logout() {
    localStorage.removeItem('tenantId');
    localStorage.removeItem('tenantCode');
    location.reload();
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth']);
  }
}
