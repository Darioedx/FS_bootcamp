import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FormularioTareasComponent } from './formulario-tareas/formulario-tareas.component';
import { BarraTareasComponent } from './barra-tareas/barra-tareas.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaTareasComponent,FormularioTareasComponent,BarraTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
