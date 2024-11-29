import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit{

  clientes:Cliente[]=[];

  constructor (private clienteService : ClienteService){}
  
    ngOnInit(): void {
      this.listCliente();
    }
  
    listCliente(){
      this.clienteService.getClienteList().subscribe(
        data =>{
          this.clientes = data
          console.log(this.clientes)
        } 
      );
    }

    deleteCliente (id:number){
      console.log(id);
      this.clienteService.deleteClienteById(id).subscribe(
        ()=>this.listCliente()
      );
    }

}
