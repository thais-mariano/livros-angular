import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = ''; // Recebe os autores como uma string do formulário
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    // Atualiza o campo 'autores' no objeto 'livro'
    this.livro.autores = this.autoresForm.split(',').map((autor) => autor.trim());

    this.servLivros
      .incluir(this.livro)
      .then((resultado: boolean) => {
        if (resultado) {
          this.router.navigateByUrl('/lista');
        }
      })
      .catch((erro: any) => console.error('Erro ao incluir livro:', erro));
  }
}
