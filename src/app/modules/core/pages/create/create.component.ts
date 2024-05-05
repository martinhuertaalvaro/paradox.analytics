import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ZorroNgModule } from '../../../ng-zorro/zorro-ng.module';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ZorroNgModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {}