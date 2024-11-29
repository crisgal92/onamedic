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
  clienteSeleccionado: Cliente | null = null; // Cliente actualmente en edición

  constructor (private clienteService : ClienteService){}
  
    ngOnInit(): void {
      this.listCliente();
    }
  
    listCliente(){
      this.clienteService.getClienteList().subscribe(
        data =>{
          this.clientes = data
          //console.log(this.clientes)
        } 
      );
    }

    deleteCliente (id:number){
      console.log(id);
      this.clienteService.deleteClienteById(id).subscribe(
        ()=>this.listCliente()
      );
    }

    editarCliente(cliente: Cliente): void {
      this.clienteSeleccionado = { ...cliente }; // Copiar los datos del cliente seleccionado
    }

    guardarCliente(): void {
      if (this.clienteSeleccionado) {
        this.clienteService.updateCliente(this.clienteSeleccionado.id, this.clienteSeleccionado).subscribe(
          response => {
            console.log('Cliente actualizado:', response);
            alert('Cliente actualizado correctamente.');
            this.clienteSeleccionado = null; // Limpiar selección
          },
          error => {
            console.error('Error al actualizar cliente:', error);
            alert('Hubo un error al actualizar el cliente.');
          }
        );
      }
    }
    

}
