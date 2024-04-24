import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public baseUrl = `${environment.apiGateway}`;
  public baseUrlAuth = `${environment.apiGateway}/api-auth`;
  public baseUrlMaestros = `${environment.apiGateway}/api-master`;

  constructor(public http: HttpClient, public router: Router) {}

  buildQueryParams(request: any) {
    let queryParams = new HttpParams();

    if (request) {
      for (const prop in request) {
        if (Array.isArray(request[prop])) {
          request[prop].forEach((element: any) => {
            queryParams = queryParams.append(prop, element);
          });
        } else if (request[prop] != undefined) {
          queryParams = queryParams.append(prop, request[prop]);
        }
      }
    }

    return queryParams;
  }
}
