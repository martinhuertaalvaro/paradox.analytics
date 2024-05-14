import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';
import { User } from '../../user/interfaces/user';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ManagementService extends BaseService {
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrlMaestros}/user/all`);
  }

  editActive(email: any): Observable<any> {
    const params = this.buildQueryParams(email);
    return this.http.post<any>(
      `${this.baseUrlMaestros}/user/edit/active`,
      null,
      { params: params }
    );
  }

  addAdmin(email: any): Observable<any> {
    const params = this.buildQueryParams(email);
    return this.http.post<any>(
      `${this.baseUrlMaestros}/user/edit/roles/add/admin`,
      null,
      { params: params }
    );
  }

  deleteAdmin(email: any): Observable<any> {
    const params = this.buildQueryParams(email);
    return this.http.post<any>(
      `${this.baseUrlMaestros}/user/edit/roles/delete/admin`,
      null,
      { params: params }
    );
  }
}
