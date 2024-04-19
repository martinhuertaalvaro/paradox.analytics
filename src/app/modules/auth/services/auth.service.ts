import { Injectable, inject } from '@angular/core';
import { ILoginResponse } from '../interfaces/i-login-response';
import { environment } from '../../../../environments/environment';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILoginRequest } from '../interfaces/i-login-requests';
import { ITenantRequest } from '../interfaces/i-tenant-request';
import { ITenantResponse } from '../interfaces/i-tenant-response';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  public static LOCAL_STORAGE_KEY_TOKEN = 'access_token';
  _router = inject(Router);

  getAccessToken(): ILoginResponse | null {
    let tokenToString = localStorage.getItem(
      AuthService.LOCAL_STORAGE_KEY_TOKEN
    );
    let res = null;
    if (tokenToString) {
      res = JSON.parse(tokenToString) as ILoginResponse;
    }
    return res;
  }

  getTenantId(): any | null {
    let res = localStorage.getItem('tenantId');
    return res;
  }

  getTenantCode(): any | null {
    let res = localStorage.getItem('tenantCode');
    return res;
  }

  saveToLocalStorageToken(token: ILoginResponse) {
    this.deleteToLocalStorageToken();
    localStorage.setItem(
      AuthService.LOCAL_STORAGE_KEY_TOKEN,
      JSON.stringify(token)
    );
  }

  deleteToLocalStorageToken() {
    localStorage.removeItem(AuthService.LOCAL_STORAGE_KEY_TOKEN);
  }

  deleteTenantId() {
    localStorage.removeItem('tenantId');
    localStorage.removeItem('tenantCode');
  }

  login(req: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      `${this.baseUrlAuth}/login_check`,
      req
    );
  }

  verify(req: ILoginRequest): Observable<boolean> {
    let queryParams: HttpParams = this.buildQueryParams(req);
    return this.http.get<boolean>(`${this.baseUrlAuth}/verify`, {
      params: queryParams,
    });
  }

  logout() {
    this.deleteToLocalStorageToken();
    this.deleteTenantId();
    this._router.navigate(['/login'], { replaceUrl: true });
  }

  getTenant(request: ITenantRequest): Observable<ITenantResponse> {
    let queryParams: HttpParams = this.buildQueryParams(request);
    return this.http.get<ITenantResponse>(
      `${this.baseUrlMaestros}/tenant/info`,
      {
        params: queryParams,
      }
    );
  }

  async getTenantFromUrl(config: boolean): Promise<any> {
    const hostname: string = window.location.hostname;
    const parts: string[] = hostname.split('.');
    let tenantRequest: ITenantRequest = {
      code: parts[0],
      active: true,
    };
    try {
      const data: ITenantResponse = await lastValueFrom(
        this.getTenant(tenantRequest)
      );
      if (data === null) {
        tenantRequest.code = this.getTenantCode();
        const data: ITenantResponse = await lastValueFrom(
          this.getTenant(tenantRequest)
        );
        const res = config ? data.code : data.id;
        return res;
      }
      return data.id;
    } catch (error: any) {
      /* this.messageService.add({
        severity: EnumIServerityMessage.ERROR,
        summary: this.s.instant('GENERAL.TENANT_NOT_FOUND'),
        detail: this.errorService.getMessage(error as HttpErrorResponse),
        life: 5000,
      }); */
      return 0;
    }
  }
}
