import { Component, inject } from '@angular/core';
import { ZorroNgModule } from '../../../ng-zorro/zorro-ng.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { lastValueFrom } from 'rxjs';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [ZorroNgModule, NgxChartsModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  public raspberryInfo: any;
  private analyticsSvc = inject(AnalyticsService);
  public data: any[] = [];
  private intervalId: any;

  show_on_console_log(event: any) {
    console.log(event);
  }

  /* this.raspberryInfo = await lastValueFrom(
      this.analyticsSvc.getRaspberryInfo()
    );
    console.log(this.raspberryInfo); */
  ngOnInit() {
    this.startInterval();
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.addRegisters();
      console.log(this.multi);
    }, 5000); // 5000 ms = 5 s
  }

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  private getSerie() {
    return {
      name: this.getCurrentDateTime(),
      value: Math.floor(Math.random() * 5001),
    };
  }

  private createSeries(count: number) {
    let objectsArray = [];
    for (let i = 0; i < count; i++) {
      objectsArray.push(this.getSerie());
    }
    return objectsArray;
  }

  private getCurrentDateTime(): string {
    const now = new Date();
    let res = this.xAxisTickFormatting(now);

    return res;
  }

  public multi = [
    {
      name: 'Corriente',
      series: this.createSeries(6),
    },
    {
      name: 'Voltaje',
      series: this.createSeries(6),
    },
    {
      name: 'Potencia',
      series: this.createSeries(6),
    },
    {
      name: 'Temperatura',
      series: this.createSeries(6),
    },
    {
      name: 'Eficacia',
      series: this.createSeries(6),
    },
  ];

  addRegisters() {
    this.multi.forEach((e) => {
      e.series.push(this.getSerie());
    });
  }

  xAxisTickFormatting(val: Date): string {
    return val.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}
