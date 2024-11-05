import { Component } from '@angular/core';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LivroListaComponent]
})
export class AppComponent {
  title = 'livros-angular';
}
