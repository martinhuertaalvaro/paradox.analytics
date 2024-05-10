import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { PrimeNgModule } from '../../../ng-prime/prime-ng.module';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../../shared/services/config/config.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormLoginComponent, PrimeNgModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor() {}

  private configSvc = inject(ConfigService);
  public showForm: boolean = false;

  ngOnInit() {
    this.configSvc.globalConfig(true, 'paradox');
  }

  public onShowForm() {
    this.showForm = true;
  }

  public onCloseForm() {
    this.showForm = false;
  }
}
