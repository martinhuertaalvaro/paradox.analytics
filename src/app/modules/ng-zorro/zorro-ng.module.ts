import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

/**
 * SharedModule should have anything but services and be imported in all modules that need the shared stuff (which could also be the AppModule).
 */
const COMPONENTS = [
  ReactiveFormsModule,
  NzCardModule,
  NzInputModule,
  NzIconModule,
  NzButtonModule,
  NzMenuModule,
  NzLayoutModule,
  NzCollapseModule,
  NzSelectModule,
  NzFormModule,
  NzDatePickerModule,
  NzTableModule,
  NzUploadModule,
  NzMessageModule,
  NzGridModule,
  NzBreadCrumbModule,
  NzListModule,
  NzSkeletonModule,
  ScrollingModule,
  NzModalModule,
  NzSwitchModule,
  NzTabsModule,
  NzPopoverModule,
  NzTimePickerModule,
  NzDividerModule,
  NzAutocompleteModule,
  NzToolTipModule,
  NzAvatarModule,
  NzBadgeModule,
  NzNotificationModule,
  NzInputNumberModule,
  NzCalendarModule,
  NzAlertModule,
  NzCheckboxModule,
  NzSpinModule,
  NzPopconfirmModule,
  NzEmptyModule,
];
@NgModule({
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
  declarations: [],
})
export class ZorroNgModule {}
