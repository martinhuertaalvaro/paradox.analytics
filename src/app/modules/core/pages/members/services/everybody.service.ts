import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';
import { User } from '../../user/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class EverybodyService extends BaseService {
  getAllMembers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrlMaestros}/members/all`);
  }

  getAllFriends(req: any): Observable<any> {
    const params = this.buildQueryParams(req);
    return this.http.get<any>(`${this.baseUrlMaestros}/members/friends`, {
      params: params,
    });
  }

  makeFriend(req: any): Observable<any> {
    const params = this.buildQueryParams(req);
    return this.http.post<any>(
      `${this.baseUrlMaestros}/members/friend/new`,
      null,
      { params: params }
    );
  }

  deleteFriend(req: any): Observable<any> {
    const params = this.buildQueryParams(req);
    return this.http.post<any>(
      `${this.baseUrlMaestros}/members/friend/delete`,
      null,
      { params: params }
    );
  }
}
