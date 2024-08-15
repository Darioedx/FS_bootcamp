import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TareasService {
  
  tareasSubject: Subject<string[]> = new Subject<string[]>();
  tareas: string[] = [];
  
  private hechasSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  private tareasCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  tareasPendientes$ = this.tareasCountSubject;
  tareasHechas$ = this.hechasSubject;
  
 
  private updateTareasCount(isDone: boolean): void {
    const tareasPendientes = this.tareas.length; 
    this.tareasCountSubject.next(tareasPendientes);
    
    if (isDone){
      const newHechasValue = this.hechasSubject.value + 1;
      this.hechasSubject.next(newHechasValue); };
   
  }

  
  addTareas(tarea: string): void {
    this.tareas.push(tarea);
    this.tareasSubject.next(this.tareas);
    this.updateTareasCount(false)
  }
 
  // Método para marcar una tarea como realizada
  markTareaskAsDone(taskIndex: number): void {
      
    this.tareas.splice(taskIndex, 1);  // Cambiar el estado de la tarea de pendiente a realizada
    
    this.tareasSubject.next(this.tareas );// Notificar los cambios a los suscriptores
   
    this.updateTareasCount(true)
    
} 
AsDone(): void {
    
   this.updateTareasCount(true)
 
} 
  constructor() { }
}

