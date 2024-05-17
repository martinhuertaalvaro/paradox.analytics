import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-area-char',
  standalone: true,
  imports: [],
  templateUrl: './area-char.component.html',
  styleUrl: './area-char.component.scss',
})
export class AreaCharComponent {
  myAreaChart: any;
  dataPoints: {
    label: string;
    corriente: number;
    potencia: number;
    voltaje: number;
    temperatura: number;
  }[] = [];

  constructor() {
    // Registrar todos los componentes de Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
    this.addDataDynamically();
  }

  createChart(): void {
    const ctx = document.getElementById('myAreaChart') as HTMLCanvasElement;
    this.myAreaChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Corriente',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true,
          },
          {
            label: 'Potencia',
            data: [],
            backgroundColor: 'rgba(192, 75, 192, 0.2)',
            borderColor: 'rgba(192, 75, 192, 1)',
            borderWidth: 1,
            fill: true,
          },
          {
            label: 'Voltaje',
            data: [],
            backgroundColor: 'rgba(192, 192, 75, 0.2)',
            borderColor: 'rgba(192, 192, 75, 1)',
            borderWidth: 1,
            fill: true,
          },
          {
            label: 'Temperatura',
            data: [],
            backgroundColor: 'rgba(75, 192, 75, 0.2)',
            borderColor: 'rgba(75, 192, 75, 1)',
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  updateChart(): void {
    const labels = this.dataPoints.map((point) => point.label);
    const corrienteData = this.dataPoints.map((point) => point.corriente);
    const potenciaData = this.dataPoints.map((point) => point.potencia);
    const voltajeData = this.dataPoints.map((point) => point.voltaje);
    const temperaturaData = this.dataPoints.map((point) => point.temperatura);

    this.myAreaChart.data.labels = labels;
    this.myAreaChart.data.datasets[0].data = corrienteData;
    this.myAreaChart.data.datasets[1].data = potenciaData;
    this.myAreaChart.data.datasets[2].data = voltajeData;
    this.myAreaChart.data.datasets[3].data = temperaturaData;

    this.myAreaChart.update();
  }

  addData(
    label: string,
    corriente: number,
    potencia: number,
    voltaje: number,
    temperatura: number
  ): void {
    this.dataPoints.push({ label, corriente, potencia, voltaje, temperatura });

    if (this.dataPoints.length > 12) {
      this.dataPoints.shift();
    }

    this.updateChart();
  }

  addDataDynamically(): void {
    setInterval(() => {
      const now = new Date();
      const label = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes()
      ).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const corriente = Math.floor(Math.random() * 300);
      const potencia = Math.floor(Math.random() * 100);
      const voltaje = Math.floor(Math.random() * 100);
      const temperatura = Math.floor(Math.random() * 100);
      this.addData(label, corriente, potencia, voltaje, temperatura);
    }, 5000);
  }
}
