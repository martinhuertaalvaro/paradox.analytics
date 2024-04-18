import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  getAllTenants(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlMaestros}/device/all`);
  }
}
