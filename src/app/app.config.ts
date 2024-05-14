import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { loadingInterceptor } from './modules/shared/interceptors/loading/loading.interceptor';
import { tokenInterceptor } from './modules/shared/interceptors/token/token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([tokenInterceptor, loadingInterceptor])),
    MessageService,
    TerminalService,
    ConfirmationService,
  ],
};
