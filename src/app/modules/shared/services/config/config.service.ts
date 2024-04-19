import { Injectable } from '@angular/core';
import { Component, Inject, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.titleSvc.setTitle(this.title);
  }

  private authSvc = inject(AuthService);
  private router = inject(Router);
  private titleSvc = inject(Title);
  private title: string = 'PARADOX';
  private tenant: string = '';
  private favicon: string = 'assets/img/paradox/favicon.ico';

  async globalConfig(_forMobile: boolean, tenantForMobile?: string) {
    this.tenant = _forMobile
      ? tenantForMobile
      : await this.authSvc.getTenantCode();
    console.log(this.tenant);
    if (this.tenant !== '') {
      this.titleSvc.setTitle(this.tenant.toUpperCase());

      this.favicon =
        this.tenant.toLowerCase() !== 'paradox'
          ? `assets/img/${this.tenant.toLowerCase()}/${this.tenant.toLowerCase()}.collapse.svg`
          : `assets/img/${this.tenant.toLowerCase()}/${this.tenant.toLowerCase()}.analytics.collapse.svg`;
      const linkElement = this.document.querySelector(
        "link[rel~='icon']"
      ) as HTMLLinkElement;
      if (linkElement) {
        linkElement.setAttribute('href', this.favicon);
      }
      const bodyElement = this.document.querySelector('body') as HTMLElement;
      if (bodyElement) {
        bodyElement.className = this.tenant;
      }
    }
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
