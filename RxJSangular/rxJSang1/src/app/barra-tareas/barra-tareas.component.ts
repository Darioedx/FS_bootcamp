import { Component, inject } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Subscription } from 'rxjs';

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
  private tareasService: TareasService = inject(TareasService)
  tareasHechas!:number
  tareasPendientes !: number 
  //constructor(private tareasService: TareasService) {
   
    tareas: Subscription = this.tareasService.tareasPendientes$.subscribe(Ntareas => {
      this.tareasPendientes = Ntareas;
    })
    hechas : Subscription = this.tareasService.tareasHechas$.subscribe(Htareas=>{
      this.tareasHechas= Htareas})

      // }

 

}// hechas : Subscription no nesesario  : Subscription , 
//y si utiliza constructor solo dejo solo this.tareasService.tareasP.....
