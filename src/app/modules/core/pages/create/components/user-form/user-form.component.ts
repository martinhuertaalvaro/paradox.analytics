import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../../../ng-prime/prime-ng.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  public registerForm!: FormGroup;
  public actualDate: any = new Date().toISOString().split('T')[0];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.generateForm();
  }

  protected generateForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      city: ['', Validators.required],
      workfield: ['Support', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      birthdate: ['', Validators.required],
      dateOfRegister: [this.actualDate],
    });
  }

  public checkForm() {
    if (
      this.registerForm.value.password !=
      this.registerForm.value.confirmPassword
    ) {
      console.log('errorContraseña');
    } else {
      console.log(this.registerForm.value);
    }
  }
}
