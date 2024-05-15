import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ZorroNgModule } from '../../../ng-zorro/zorro-ng.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AnalyticsService } from './services/analytics.service';
import { Chart, registerables } from 'chart.js';
import { AreaCharComponent } from './components/area-char/area-char.component';
import { RadarCharComponent } from './components/radar-char/radar-char.component';
import { PolarCharComponent } from './components/polar-char/polar-char.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    ZorroNgModule,
    NgxChartsModule,
    AreaCharComponent,
    RadarCharComponent,
    PolarCharComponent,
  ],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'], // Asegúrate de que esta línea use 'styleUrls' en plural
})
export class AnalyticsComponent {}
