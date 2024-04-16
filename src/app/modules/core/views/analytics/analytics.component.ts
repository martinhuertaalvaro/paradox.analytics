import { Component } from '@angular/core';
import { ZorroNgModule } from '../../../ng-zorro/zorro-ng.module';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [ZorroNgModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  chart: any = [];

  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Wins', 'Loses'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}
