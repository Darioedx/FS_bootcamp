
import { Component, inject } from '@angular/core';
import { TareasService } from '../tareas.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  template:  `
  <div class="tareas-pendientes">
    <h2>Lista de Tareas Pendientes</h2>
    <ul>
      <li class="item" *ngFor="let tarea of nuevastareas,let i = index">
       
        <span>{{ tarea }}</span>
        <div class= "boton">
          <button class="bot-tareas" (click)="markTareaAsDone(i)">Marcar como realizada</button>
       </div>
      </li>
    </ul>
  </div>

  <div  class="tareas-realizadas">
  <h2>Tareas Realizadas</h2>
  <ul>
    <li class = 'verde' *ngFor="let task of tareasHechas">
     {{ task }}
    </li>
  </ul>
</div>
`,                          
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  nuevastareas: string[] = [];
  tareasHechas: string[] = []; 
  private tareasService: TareasService = inject(TareasService)
 // constructor(private tareasService: TareasService) {}
   
  ngOnInit(): void {
    this.tareasService.getTareas()
    .subscribe({
    next: tarea => this.nuevastareas = tarea
    })
    this.tareasService.getHechasLista()
    .subscribe({
      next: tarea => this.tareasHechas = tarea
    })
    }
  
   markTareaAsDone(taskIndex: number): void {
   
    this.tareasService.markTareaskAsDone(taskIndex);   

  }

}
 