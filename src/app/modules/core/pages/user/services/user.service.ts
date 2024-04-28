import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  getAllTenants(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlMaestros}/device/all`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlMaestros}/user/all`);
  }

  getUserInfo(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrlMaestros}/user/info`, {
      params: { email: email },
    });
  }
}
