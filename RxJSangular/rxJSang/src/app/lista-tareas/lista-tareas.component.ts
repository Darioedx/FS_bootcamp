
import { Component, OnDestroy, inject } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  template:  `
  <div *ngIf="nuevastareas.length > 0">
    <h2>Lista de Tareas Pendientes</h2>
    <ul>
      <li *ngFor="let tarea of nuevastareas,let i = index">
      {{ tarea }}
      <button (click)="markTareaAsDone(i)">Marcar como realizada</button>
      
      </li>
    </ul>
  </div>
  <div *ngIf="nuevastareas.length === 0">
    <p>No hay tareas pendientes</p>
  </div>
  <div *ngIf="completedTareas.length > 0">
  <h2>Tareas Realizadas</h2>
  <ul>
    <li *ngFor="let task of completedTareas">
      {{ task }}
    </li>
  </ul>
</div>
`,                          
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  nuevastareas: string[] = [];
  subscription: Subscription;
  completedTareas: string[] = []; 
 
  
  constructor(private tareasService: TareasService) {
    this.subscription = this.tareasService.tareasSubject.subscribe(tareas => {
      this.nuevastareas = tareas;
    });
    
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
   // Método para marcar una tarea como realizada
   markTareaAsDone(taskIndex: number): void {
    this.completedTareas.push(this.nuevastareas[taskIndex])//añado tarea eliminada en completadas
    // Llamar al método en el servicio para marcar la tarea como realizada
    this.tareasService.markTareaskAsDone(taskIndex);
 
    

  }

}
 