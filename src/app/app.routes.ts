import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/layout/auth/auth.component';
import { LayoutComponent } from './modules/core/layout/layout.component';
import { MainComponent } from './modules/core/views/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'core',
    component: LayoutComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
];
