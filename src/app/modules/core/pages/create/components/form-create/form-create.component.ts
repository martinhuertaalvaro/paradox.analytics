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
      let lastEntity = this.entity;
      this.entity = params['entity'];
      if (lastEntity != this.entity) {
        this.generateForm();
      }
    });
  }
  public form: FormGroup = this.formBuilder.group({});
  public modelEntity: any;
  public modelFormKeys: any;
  public entity: string = '';
  public formCreateSvc = inject(FormCreateService);

  async ngOnInit() {
    this.generateForm();
  }

  protected async generateForm() {
    this.modelEntity = await lastValueFrom(
      this.formCreateSvc.getProperties(this.entity)
    );
    this.modelFormKeys = Object.keys(this.modelEntity);
    console.log(this.modelFormKeys);
    this.modelFormKeys.forEach((key: string) => {
      this.form.addControl(key, this.formBuilder.control(''));
    });
  }
}
