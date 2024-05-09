import { Component, inject } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { PrimeNgModule } from '../../../../../../../ng-prime/prime-ng.module';
import { AuthService } from '../../../../../../../auth/services/auth.service';
import { CreateService } from '../../../../services/create.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  private static ADMINKEY = 'ROLE_ADMIN';
  public registerForm!: FormGroup;
  public actualDate: any = new Date().toISOString().split('T')[0];
  private authSvc = inject(AuthService);
  private createSvc = inject(CreateService);
  public userRoles: string = this.authSvc.getRolesFromAccesToken();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.generateForm();
  }

  protected generateForm() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        city: ['', Validators.required],
        role: ['', Validators.required],
        workfield: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        birthdate: ['', Validators.required],
        dateOfRegister: [this.actualDate],
      },
      {
        validator: this.passwordMatchValidator, // Agregar validador personalizado para comparar contraseñas
      } as AbstractControlOptions
    );
  }

  async onSubmit() {
    let res = await lastValueFrom(
      this.createSvc.createNewRegister(this.registerForm.value, 'user')
    );
    console.log(res);

    this.generateForm();
  }

  protected passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
}
