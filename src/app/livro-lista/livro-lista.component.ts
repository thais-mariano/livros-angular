import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  standalone: true,
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  imports: [CommonModule]
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {

    this.servLivros
      .obterLivros()
      .then((livros: Livro[]) => {
        this.livros = livros;
      })
      .catch((erro: any) => console.error("Erro ao carregar livros:", erro));
  }

  excluir(codigo: string): void {
  
    this.servLivros
      .excluir(codigo)
      .then((resultado: boolean) => {
        if (resultado) {
          this.servLivros.obterLivros().then((livros: Livro[]) => {
            this.livros = livros;
          });
        }
      })
      .catch((erro: any) => console.error("Erro ao excluir livro:", erro));
  }

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}