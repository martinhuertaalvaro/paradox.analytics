import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormCreateService extends BaseService {
  getProperties(entity: any): Observable<any> {
    entity = { entity: entity };
    let queryParams: HttpParams = this.buildQueryParams(entity);
    return this.http.get<any>(
      `${this.baseUrlMaestros}/create/form-create/properties`,
      {
        params: queryParams,
      }
    );
  }
}
