import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/layout/auth/auth.component';
import { LayoutComponent } from './modules/core/layout/layout.component';
import { MainComponent } from './modules/core/pages/main/main.component';
import { ProfileComponent } from './modules/core/pages/user/views/profile/profile.component';
import { ManagementComponent } from./modules/core/pages/settings/settings.componentponent';
import { SettingsComponent } from './modules/core/pages/settings/settings.component';
import { AnalyticsComponent } from './modules/core/pages/analytics/analytics.component';
import { DevicesComponent } from './modules/core/pages/devices/devices.component';
import { coreGuard } from './modules/shared/guards/core.guard';
import { authGuard } from './modules/shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, canActivate: [authGuard] },
  {
    path: 'core',
    component: LayoutComponent,
    canActivate: [coreGuard],
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
          { path: '', redirectTo: 'management', pathMatch: 'full' },
          {
            path: 'management',
            component: ManagementComponent,
            data: {
              customBreadcrumb: 'Management',
            },
          },
          {
            path: 'profile',
            component: ProfileComponent,
            data: {
              customBreadcrumb: 'My Profile',
            },
          },
        ],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          customBreadcrumb: 'Settings',
        },
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
