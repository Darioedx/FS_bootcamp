import { Component, inject } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { ProductosComponent } from '../productos/productos.component';
import { Products } from '../interface/products';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [RouterModule,ProductosComponent,CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  
  protected listaProductos: Products[]=[]
  private dataService:DataService = inject(DataService)
  

  ngOnInit(): void {
    
    this.dataService.getProducts().subscribe({next:(data)=> {
      this.listaProductos = data 
    },
    error: (err: any) => {console.error('Ocurrió un error al obtener los productos:', err);
    alert('Ocurrió un error al obtener los productos')}
    
  })
  }
 
}
