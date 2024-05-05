import { Component, inject } from '@angular/core';
import { FormCreateService } from '../../services/form-create.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZorroNgModule } from '../../../../../ng-zorro/zorro-ng.module';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ZorroNgModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.scss',
})
export class FormCreateComponent {
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.route.params.subscribe((params) => {
      this.entity = params['entity'];

      this.generateForm();
    });
  }
  public keys: any;
  public form: FormGroup = this.formBuilder.group({});
  public modelEntity: any;
  public entity: string = '';
  public formCreateSvc = inject(FormCreateService);

  async ngOnInit() {}

  protected async generateForm() {
    this.keys = null;
    this.resetForm();
    this.modelEntity = await lastValueFrom(
      this.formCreateSvc.getProperties(this.entity)
    );
    console.log(this.modelEntity);
    Object.keys(this.modelEntity).forEach((key: string) => {
      if (this.checkKey(key))
        this.form.addControl(key, this.formBuilder.control(''));
    });
    this.keys = Object.keys(this.form.controls);
  }

  private checkKey(key: string) {
    return !Array.isArray(this.modelEntity[key]) && this.keyIsNot(key);
  }

  private resetForm() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.removeControl(key);
    });
  }

  private keyIsNot(key: string): boolean {
    return key !== 'id' && key !== 'tenantId' && key !== 'userIdentifier';
  }
}
