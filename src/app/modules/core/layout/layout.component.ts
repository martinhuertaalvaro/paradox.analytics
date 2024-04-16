import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZorroNgModule } from '../../ng-zorro/zorro-ng.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    ZorroNgModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  isCollapsed: boolean = false;
  isAzure: boolean = false;

  async ngOnInit() {}

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
