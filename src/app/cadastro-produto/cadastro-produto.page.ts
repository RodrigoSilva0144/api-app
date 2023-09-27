import { Produto } from '../Models/Produto.model';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto = {

    nome:'',
    descricao:'',
    validade:'',
    preco: 0
  };

  constructor(private prodService: ProdutoService) { }

  ngOnInit() {

  }
  salvarProduto(){
    this.prodService.salvar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      alert("Produto: " + this.produto.id + "Salvo!")
    });
    this.prodService.salvar(this.produto);
  }

}

