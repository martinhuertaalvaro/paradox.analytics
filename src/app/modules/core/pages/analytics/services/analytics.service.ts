import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService extends BaseService {
  getRaspberryInfo(): Observable<any> {
    return this.http.get<any>(
      `https://f2pwg9pl-50100.uks1.devtunnels.ms/raspberry`
    );
  }
}
