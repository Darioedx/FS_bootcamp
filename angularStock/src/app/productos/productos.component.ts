import { Component, Input } from '@angular/core';
import { Products } from '../interface/products';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() products!:Products
}
