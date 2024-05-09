import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageSvc: MessageService) {}

  public create(severity: string, summary: string, detail: string) {
    this.messageSvc.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
