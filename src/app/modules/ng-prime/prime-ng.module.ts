import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

/**
 * SharedModule should have anything but services and be imported in all modules that need the shared stuff (which could also be the AppModule).
 */
const COMPONENTS = [
  ReactiveFormsModule,
  ButtonModule,
  TableModule,
  ToastModule,
];
@NgModule({
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
  declarations: [],
})
export class PrimeNgModule {}
