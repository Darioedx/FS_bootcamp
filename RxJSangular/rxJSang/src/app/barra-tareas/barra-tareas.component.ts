import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-barra-tareas',
  standalone: true,
  imports: [],
  template:  `
  <div>
    <p>Tareas Pendientes: {{ tareasPendientes }}</p>
  </div>
  <div>
    <p>Tareas hechas: {{ tareasHechas }}</p>
  </div>
`,                                                   //'./barra-tareas.component.html',
  styleUrl: './barra-tareas.component.css'
})
export class BarraTareasComponent {
  constructor(private tareasService: TareasService) {}

  get tareasPendientes(): number {
    return this.tareasService.tareasPendientes;

}

get tareasHechas():number{
return this.tareasService.hechas
}

}
