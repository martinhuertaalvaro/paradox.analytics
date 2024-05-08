import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {}
