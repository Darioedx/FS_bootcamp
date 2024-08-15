import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-barra-tareas',
  standalone: true,
  imports: [],
  template:  `
  <div class="barra-pendientes">
    <p>Tareas Pendientes: {{ tareasPendientes }}</p>
  </div>
  <div class="barra-realizadas">
    <p>Tareas hechas: {{ tareasHechas }}</p>
  </div>
`,                                                   
  styleUrl: './barra-tareas.component.css'
})
export class BarraTareasComponent {
  tareasPendientes !: number
  tareasHechas!:number
  
  constructor(private tareasService: TareasService) {}

ngOnInit(): void 
  {
    this.tareasService.getCounterPendientes()
    .subscribe({
    next: tarea => this.tareasPendientes = tarea,
      }),
     
      this.tareasService.getCounterHechas()
      .subscribe({next: tarea => this.tareasHechas = tarea})
    }

}
