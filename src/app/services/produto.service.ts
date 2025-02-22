import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Produto } from '../Models/Produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:3000/produtos';

  public listaProdutos: Produto[] = [];

  constructor(private http:HttpClient) { }


  public getAll(): Observable<Produto[]>{

    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  public getOne(id:number): Observable<Produto>{
    return this.http.get<Produto>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

  }

  exibirErro(erro: any){
    console.log(erro);
    alert("A operação não pôde ser concluída!");
    return EMPTY
  }

  salvar(usuario: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }
}

