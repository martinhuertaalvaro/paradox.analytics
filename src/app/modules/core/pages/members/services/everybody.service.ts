import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';
import { User } from '../../user/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class EverybodyService extends BaseService {
  getAllMembers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrlMaestros}/user/members`);
  }
}
