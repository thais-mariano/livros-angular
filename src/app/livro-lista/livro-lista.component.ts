import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  standalone: true,  // Torna o componente standalone
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  imports: [CommonModule]  // Adiciona CommonModule para habilitar *ngFor e *ngIf
})
export class LivroListaComponent {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
