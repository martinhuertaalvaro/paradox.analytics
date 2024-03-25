import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
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
