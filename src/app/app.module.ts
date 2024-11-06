import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        ControleEditoraService,
        ControleLivrosService,
      ]
}).catch(err => console.error(err));
export class AppModule {}
