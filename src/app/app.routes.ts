import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/layout/auth/auth.component';
import { LayoutComponent } from './modules/core/layout/layout.component';
import { MainComponent } from './modules/core/views/main/main.component';
import { ProfileComponent } from './modules/core/views/user/profile/profile.component';
import { SettingsComponent } from './modules/core/views/user/settings/settings.component';
import { AnalyticsComponent } from './modules/core/views/analytics/analytics.component';
import { DevicesComponent } from './modules/core/views/devices/devices.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'core',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        component: MainComponent,
        data: {
          customBreadcrumb: 'Home',
        },
      },
      {
        path: 'user',
        data: {
          customBreadcrumb: 'User',
        },
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          {
            path: 'profile',
            component: ProfileComponent,
            data: {
              customBreadcrumb: 'Profile',
            },
          },
          {
            path: 'settings',
            component: SettingsComponent,
            data: {
              customBreadcrumb: 'Settings',
            },
          },
        ],
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          customBreadcrumb: 'Analytics',
        },
      },
      {
        path: 'devices',
        component: DevicesComponent,
        data: {
          customBreadcrumb: 'Devices',
        },
      },
    ],
  },
];
