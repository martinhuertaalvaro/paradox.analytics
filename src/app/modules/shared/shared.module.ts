import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

// Translate Modules
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxTranslateRoutesModule } from 'ngx-translate-routes';

//necesario para las traducciones
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('language') || 'es',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxTranslateRoutesModule.forRoot({
      enableTitleTranslate: true,
    }),
  ],
  exports: [LoadingComponent, TranslateModule],
})
export class SharedModule {}
