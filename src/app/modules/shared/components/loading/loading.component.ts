import { Component, OnInit, inject } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  private loadingSvc = inject(LoadingService);

  public isLoading$ = this.loadingSvc.isLoading$;
}
