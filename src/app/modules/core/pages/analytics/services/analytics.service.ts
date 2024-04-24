import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService extends BaseService {
  getRaspberryInfo(): Observable<any> {
    return this.http.get<any>(`http://192.168.43.16:50100/raspberry`);
  }
}
