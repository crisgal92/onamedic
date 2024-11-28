import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  id: number=0;
nombre: string ='';
correo : string='';
descripcion: string ='';
constructor (private clienteService : ClienteService){}

  ngOnInit(): void {   
  }
  addCliente(){
    let cliente = new Cliente(this.id, this.nombre, this.correo, this.descripcion);
    console.log(cliente);
    this.clienteService.createCliente(cliente).subscribe(
      res=> console.log(res)
    );
  }

}
