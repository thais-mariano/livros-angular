import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'lista'},
    { path: 'lista', component: LivroListaComponent }, 
    { path: 'dados', component: LivroDadosComponent },
  ];
  