import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormLoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor() {}
  public showForm: boolean = false;

  ngOnInit() {}

  public onShowForm() {
    this.showForm = true;
  }

  public onCloseForm() {
    this.showForm = false;
  }
}