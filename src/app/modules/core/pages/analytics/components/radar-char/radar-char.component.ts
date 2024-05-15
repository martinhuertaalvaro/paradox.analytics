import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-radar-char',
  standalone: true,
  imports: [],
  templateUrl: './radar-char.component.html',
  styleUrl: './radar-char.component.scss',
})
export class RadarCharComponent {
  radarChart: any;

  constructor() {
    // Registrar todos los componentes de Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createRadarChart();
  }

  createRadarChart(): void {
    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
    this.radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Eficiencia',
          'Corriente',
          'Voltaje',
          'Temperatura',
          'Potencia',
        ],
        datasets: [
          {
            label: 'Raspberry 1',
            data: [85, 90, 75, 80, 88],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
          },
          {
            label: 'Raspberry 2',
            data: [70, 82, 88, 75, 95],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });
  }
}
