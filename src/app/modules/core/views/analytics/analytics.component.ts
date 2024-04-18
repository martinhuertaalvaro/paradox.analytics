import { Component } from '@angular/core';
import { ZorroNgModule } from '../../../ng-zorro/zorro-ng.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [ZorroNgModule, NgxChartsModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  public single: any[] = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
    {
      name: 'UK',
      value: 6200000,
    },
    {
      name: 'Italy',
      value: 4200000,
    },
    {
      name: 'Spain',
      value: 8200000,
    },
  ];

  // options
  showLegend: boolean = false;
  showLabels: boolean = false;

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit() {}
}
