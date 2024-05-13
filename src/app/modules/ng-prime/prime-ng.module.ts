import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { TerminalModule } from 'primeng/terminal';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

/**
 * SharedModule should have anything but services and be imported in all modules that need the shared stuff (which could also be the AppModule).
 */
const COMPONENTS = [
  ReactiveFormsModule,
  ButtonModule,
  TableModule,
  ToastModule,
  FormsModule,
  InputTextModule,
  InputGroupModule,
  InputGroupAddonModule,
  FieldsetModule,
  CardModule,
  TerminalModule,
  TableModule,
  InputTextModule,
  TagModule,
  DropdownModule,
  MultiSelectModule,
  ProgressBarModule,
  ButtonModule,
  IconFieldModule,
  InputIconModule,
  DialogModule,
  AvatarModule,
  AvatarGroupModule,
];
@NgModule({
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
  declarations: [],
})
export class PrimeNgModule {}
