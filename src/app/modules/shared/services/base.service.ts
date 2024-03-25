import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import * as dayjs from 'dayjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public baseUrl = `${environment.apiGateway}`;
  public baseUrlAuth = `${environment.apiGateway}/api-auth`;
  public baseUrlMaestros = `${environment.apiGateway}/api-master`;

  constructor(public http: HttpClient) {}

  buildQueryParams(request: any) {
    let queryParams = new HttpParams();

    if (request) {
      for (const prop in request) {
        if (Array.isArray(request[prop])) {
          request[prop].forEach((element: any) => {
            queryParams = queryParams.append(prop, element);
          });
        } else if (request[prop] && typeof request[prop] === 'object') {
          queryParams = queryParams.append(prop, dayjs(request[prop]).format('YYYY-MM-DD'));
        } else if (request[prop] != undefined) {
          queryParams = queryParams.append(prop, request[prop]);
        }
      }
    }

    return queryParams;
  }
}
