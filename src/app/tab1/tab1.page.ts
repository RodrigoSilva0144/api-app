import { Usuario } from './../Models/Usuario.model';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listaUsuarios: Usuario[]=[];
  usuario?: Usuario;
  id: number = 0;

  constructor(private UsuarioService: UsuarioService) {}


  buscarUsuarios(){
    this.UsuarioService.getAll().subscribe(retorno =>{
    this.listaUsuarios = retorno as Usuario[];
    console.log(this.listaUsuarios)
    this.usuario = undefined;
  });
  }

  buscarPorID(){
    this.UsuarioService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno)
      this.usuario = retorno as Usuario;
      this.listaUsuarios = [];
    })
  }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

}
