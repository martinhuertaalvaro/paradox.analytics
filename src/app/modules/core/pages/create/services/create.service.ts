import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateService extends BaseService {
  createNewRegister(req: any, mode: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrlMaestros}/${mode}/new`, req);
  }
}
