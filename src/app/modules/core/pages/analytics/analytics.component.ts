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
  public data: any[] = [];
  public create_ngx_charts_pie_grid(data: any[]) {
    this.single.forEach((e) => {
      this.data.push({
        name: e.name,
        value: e.value,
        label: e.label,
      });
    });
  }
  public single: any[] = [
    {
      name: 'Raspberry PI 5',
      value: 47,
    },
    {
      name: 'Raspberry PI 5',
      value: 50,
    },
    {
      name: 'Raspberry PI 5',
      value: 72,
    },
    {
      name: 'Raspberry PI 5',
      value: 62,
    },
    {
      name: 'Raspberry PI 5',
      value: 42,
    },
    {
      name: 'Raspberry PI 5',
      value: 82,
    },
  ];

  show_on_console_log(event: any) {
    console.log(event);
  }

  ngOnInit() {
    this.create_ngx_charts_pie_grid(this.single);
  }

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  multi = [
    {
      name: 'Mauritania',
      series: [
        {
          value: 5809,
          name: '2016-09-21T12:35:26.349Z',
        },
        {
          value: 2648,
          name: '2016-09-18T00:59:26.174Z',
        },
        {
          value: 6761,
          name: '2016-09-15T13:04:35.192Z',
        },
        {
          value: 2256,
          name: '2016-09-20T04:43:16.772Z',
        },
        {
          value: 2714,
          name: '2016-09-14T05:35:22.813Z',
        },
      ],
    },
    {
      name: 'Rwanda',
      series: [
        {
          value: 3651,
          name: '2016-09-21T12:35:26.349Z',
        },
        {
          value: 4058,
          name: '2016-09-18T00:59:26.174Z',
        },
        {
          value: 2307,
          name: '2016-09-15T13:04:35.192Z',
        },
        {
          value: 2683,
          name: '2016-09-20T04:43:16.772Z',
        },
        {
          value: 6378,
          name: '2016-09-14T05:35:22.813Z',
        },
      ],
    },
    {
      name: 'Palau',
      series: [
        {
          value: 5022,
          name: '2016-09-21T12:35:26.349Z',
        },
        {
          value: 4362,
          name: '2016-09-18T00:59:26.174Z',
        },
        {
          value: 5802,
          name: '2016-09-15T13:04:35.192Z',
        },
        {
          value: 6835,
          name: '2016-09-20T04:43:16.772Z',
        },
        {
          value: 6315,
          name: '2016-09-14T05:35:22.813Z',
        },
      ],
    },
    {
      name: 'United States Minor Outlying Islands',
      series: [
        {
          value: 3443,
          name: '2016-09-21T12:35:26.349Z',
        },
        {
          value: 6266,
          name: '2016-09-18T00:59:26.174Z',
        },
        {
          value: 4985,
          name: '2016-09-15T13:04:35.192Z',
        },
        {
          value: 2352,
          name: '2016-09-20T04:43:16.772Z',
        },
        {
          value: 4211,
          name: '2016-09-14T05:35:22.813Z',
        },
      ],
    },
    {
      name: 'Mozambique',
      series: [
        {
          value: 4035,
          name: '2016-09-21T12:35:26.349Z',
        },
        {
          value: 5504,
          name: '2016-09-18T00:59:26.174Z',
        },
        {
          value: 4869,
          name: '2016-09-15T13:04:35.192Z',
        },
        {
          value: 3732,
          name: '2016-09-20T04:43:16.772Z',
        },
        {
          value: 4310,
          name: '2016-09-14T05:35:22.813Z',
        },
      ],
    },
  ];
}
