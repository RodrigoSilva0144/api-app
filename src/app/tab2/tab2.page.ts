import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  listaProdutos: Produto[] = [];
  produto?: Produto;
  id: number = 0;
  preco: number = 0;
  descricao?: any;
  validade: any;

  constructor(private prodService: ProdutoService) {}

  buscarProdutos(){

    this.prodService.getAll().subscribe(retorno =>{
      this.listaProdutos = retorno as Produto[];
      console.log(this.listaProdutos);
      this.produto = undefined;
    });
  }

  buscarPorID(){
    this.prodService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.produto = retorno as Produto;
      this.listaProdutos = [];
    });
  }

  ngOnInit(): void {
    this.buscarProdutos();
  }
}
