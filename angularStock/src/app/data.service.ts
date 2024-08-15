import { Injectable, inject } from '@angular/core';
import { Products } from './interface/products';
import { HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient)//replazo constructor por inject
 
  getProducts() {
  return this.http.get<Products[]>('http://localhost:5000/api/products')
    .pipe(//empaqueto en 'pipe' para manejo de errores y data
    tap((data: Products[]) => {
      console.log('Datos recibidos:', data);
    }),
      catchError((error: any) => {
        // manejo de errores aquí si es necesario
        throw error;
      })
    );
}
addProducts(body:Products){return this.http.post('http://localhost:5000/api/products',body)
            .pipe(
              catchError((error: any) => {
                // manejo de errores aquí si es necesario
                throw error;
              })
            ) 
}
  constructor() { }
}
