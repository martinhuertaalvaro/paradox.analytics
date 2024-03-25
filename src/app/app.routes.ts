import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/layout/auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  /* { path: 'dashboard', component: DashoardComponent }, */
];
