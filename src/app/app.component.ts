import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './modules/shared/services/config/config.service';
import { LoadingComponent } from './modules/shared/components/loading/loading.component';
import { PrimeNgModule } from './modules/ng-prime/prime-ng.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, PrimeNgModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'paradox.analytics';

  private configSvc = inject(ConfigService);
  ngOnInit() {
    this.configSvc.globalConfig(false);
  }
}
