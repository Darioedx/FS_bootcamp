import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TareasService {
  
  tareasSubject: Subject<string[]> = new Subject<string[]>();
  tareas: string[] = [];
  hechas: number = 0


 get tareasPendientes(): number {
    return this.tareas.length;
  }

  addTareas(tarea: string): void {
    this.tareas.push(tarea);
    //this.tareasSubject.next([...this.tareas]);hace una coopia del array origina (shadow copy)
    this.tareasSubject.next(this.tareas);
  }
 // Método para marcar una tarea como realizada
  markTareaskAsDone(taskIndex: number): void {
  // Verificar que el índice sea válido
  if (taskIndex >= 0 && taskIndex < this.tareas.length) {
     
    this.tareas.splice(taskIndex, 1);  // Cambiar el estado de la tarea de pendiente a realizada
    
    this.tareasSubject.next(this.tareas );// Notificar los cambios a los suscriptores
    this.hechas +=1
  }
} 

  constructor() { }
}

