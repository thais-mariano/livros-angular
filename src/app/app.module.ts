import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ControleEditoraService,
    ControleLivrosService
  ]
}).catch(err => console.error(err));
