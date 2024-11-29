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
  addCliente() {
    let cliente = new Cliente(this.id, this.nombre, this.correo, this.descripcion);
    console.log(cliente);
  
    this.clienteService.createCliente(cliente).subscribe(
      res => {
        console.log(res);
        alert('Gracias Nostros te contactamos'); // Mostrar alerta
        this.limpiarFormulario(); // Limpia el formulario después de guardar
      },
      err => {
        console.error('Error al registrar cliente:', err);
        alert('Hubo un error al registrar el cliente'); // Alerta de error
      }
    );
  }
  
  // Método para limpiar el formulario
  limpiarFormulario() {
    this.id = 0;
    this.nombre = '';
    this.correo = '';
    this.descripcion = '';
  }
  }


