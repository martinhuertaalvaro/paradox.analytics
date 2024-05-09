import { ActivatedRoute, Route, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/layout/auth/auth.component';
import { LayoutComponent } from './modules/core/layout/layout.component';
import { MainComponent } from './modules/core/pages/main/main.component';
import { ProfileComponent } from './modules/core/pages/user/views/profile/profile.component';
import { SettingsComponent } from './modules/core/pages/settings/settings.component';
import { AnalyticsComponent } from './modules/core/pages/analytics/analytics.component';
import { DevicesComponent } from './modules/core/pages/devices/devices.component';
import { coreGuard } from './modules/shared/guards/core.guard';
import { authGuard } from './modules/shared/guards/auth.guard';
import { ManagementComponent } from './modules/core/pages/user/views/management/management.component';
import { TeamsComponent } from './modules/core/pages/teams/teams.component';
import { CreateComponent } from './modules/core/pages/admin/views/create/create.component';
import { UserFormComponent } from './modules/core/pages/admin/views/create/components/user-form/user-form.component';
import { DeviceFormComponent } from './modules/core/pages/admin/views/create/components/device-form/device-form.component';
import { TeamFormComponent } from './modules/core/pages/admin/views/create/components/team-form/team-form.component';

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
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
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
        data: {
          customBreadcrumb: 'Device',
        },
        children: [
          { path: '', redirectTo: '/analytics', pathMatch: 'full' },

          {
            path: ':name',
            component: DevicesComponent,
            data: {
              customBreadcrumb: 'Details',
            },
          },
        ],
      },
      {
        path: 'teams',
        data: {
          customBreadcrumb: 'Team',
        },
        children: [
          { path: '', redirectTo: '/home', pathMatch: 'full' },

          {
            path: ':name',
            component: TeamsComponent,
            data: {
              customBreadcrumb: 'Details',
            },
          },
        ],
      },

      {
        path: 'admin',
        data: {
          customBreadcrumb: 'Admin',
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
            path: 'create',
            component: CreateComponent,
            data: {
              customBreadcrumb: 'Create',
            },
            children: [
              { path: '', redirectTo: 'user', pathMatch: 'full' },
              {
                path: 'user',
                component: UserFormComponent,
                data: {
                  customBreadcrumb: 'User',
                },
              },
              {
                path: 'device',
                component: DeviceFormComponent,
                data: {
                  customBreadcrumb: 'Device',
                },
              },
              {
                path: 'team',
                component: TeamFormComponent,
                data: {
                  customBreadcrumb: 'Team',
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
