import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-polar-char',
  standalone: true,
  imports: [],
  templateUrl: './polar-char.component.html',
  styleUrl: './polar-char.component.scss',
})
export class PolarCharComponent implements OnInit, OnDestroy {
  polarCharts: Chart[] = [];

  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);

    const chartData = [
      { label: 'Raspberry 1', data: [10, 20, 30, 40, 50] },
      { label: 'Raspberry 2', data: [5, 15, 25, 35, 45] },
      { label: 'Raspberry 3', data: [20, 30, 40, 50, 60] },
      { label: 'Raspberry 4', data: [15, 25, 35, 45, 55] },
      { label: 'Raspberry 5', data: [30, 40, 50, 60, 70] },
      { label: 'Raspberry 6', data: [30, 40, 50, 60, 70] },
    ];

    const chartOptions = [
      { title: 'Raspberry 1' },
      { title: 'Raspberry 2' },
      { title: 'Raspberry 3' },
      { title: 'Raspberry 4' },
      { title: 'Raspberry 5' },
      { title: 'Raspberry 6' },
    ];

    for (let i = 0; i < 6; i++) {
      const canvas = document.getElementById(
        `polar-chart-${i}`
      ) as HTMLCanvasElement;
      console.log(i);
      const polarChart: any = new Chart(canvas, {
        type: 'polarArea',
        data: {
          labels: [
            'Corriente',
            'Potencia',
            'Voltaje',
            'Temperatura',
            'Eficacia',
          ],
          datasets: [
            {
              label: chartData[i].label,
              data: chartData[i].data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: chartOptions[i].title,
            },
          },
        },
      });

      this.polarCharts.push(polarChart);
    }
  }

  ngOnDestroy(): void {
    this.polarCharts.forEach((chart) => chart.destroy());
  }
}
