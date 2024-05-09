import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ILoginRequest } from '../../interfaces/i-login-requests';
import { ITenantRequest } from '../../interfaces/i-tenant-request';
import { environment } from '../../../../../environments/environment';
import { ITenantResponse } from '../../interfaces/i-tenant-response';
import { Router } from '@angular/router';
import { ConfigService } from '../../../shared/services/config/config.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../ng-prime/prime-ng.module';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PrimeNgModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  private router = inject(Router);
  private authSvc = inject(AuthService);
  private configSvc = inject(ConfigService);
  private toastSvc = inject(ToastService);
  protected loginForm!: FormGroup;
  public tenantExist: any = false;

  loadForm() {
    this.loginForm = this.formBuilder.group({
      tenantId: ['', Validators.required],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadForm();
  }

  // Método para enviar el formulario
  async onSubmit() {
    if (!this.tenantExist) {
      let tenantCode = this.loginForm.value.tenantId;
      let request: ITenantRequest = {
        code: tenantCode,
        active: true,
      };
      this.authSvc.getTenant(request).subscribe((res: any) => {
        res !== null
          ? (this.configSvc.globalConfig(true, res.code),
            (this.tenantExist = true),
            localStorage.setItem('tenantId', res.id.toString()),
            localStorage.setItem('tenantCode', res.code))
          : ((this.tenantExist = null),
            this.authSvc.deleteTenantId(),
            this.toastSvc.create('error', 'Unauthorized', 'Invalid Client'));
      });
    } else if (this.tenantExist) {
      let request: ILoginRequest = this.loginForm.value as ILoginRequest;
      request.tenantId = this.authSvc.getTenantId();
      this.authSvc.login(request).subscribe({
        next: (res: any) => {
          const token = res;
          this.authSvc.verify(request).subscribe((res: any) => {
            if (res === true) {
              this.authSvc.saveToLocalStorageToken(token);
              this.router.navigate(['/core']);
            } else {
              this.toastSvc.create(
                'error',
                'Unauthorized',
                'Invalid Credentials'
              );
            }
          });
        },
        error: (err: any) => {
          this.toastSvc.create('error', err.statusText, err.error.message);
        },
      });
    }
    this.loginForm.reset();
  }
}
