import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL: string = "http://localhost:3030/livros";


export interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  async obterLivros(): Promise<Livro[]> {
    const response: Response = await fetch(baseURL, { method: "GET" });
    const data: LivroMongo[] = await response.json();
  
    return data.map((item: LivroMongo): Livro => ({
      codigo: item._id ?? "",
      codEditora: item.codEditora,
      titulo: item.titulo,
      resumo: item.resumo,
      autores: item.autores,
    }));
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };
  
    const response: Response = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroMongo),
    });
  
    return response.ok;
  }
  
  async excluir(codigo: string): Promise<boolean> {
    const response: Response = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
    return response.ok;
  }  
}
