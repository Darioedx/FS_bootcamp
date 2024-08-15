import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TareasService {
  
  tareasSubject: Subject<string[]> = new Subject<string[]>();
  hechasListaSubject: Subject<string[]> = new Subject<string[]>();
  hechasSubjectCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  tareas: string[] = [];
  tareasCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  completedTareas: string[] = []; 
  /////////////////////////////////////////////////////
 
    addTareas(tarea: string): void {
    this.tareas.push(tarea);
    this.tareasSubject.next(this.tareas);
    this.tareasCounter()
   
  }
  getTareas():Observable<any>{
    return this.tareasSubject.asObservable()
     }

 ////////////////////////////////////////////////////
  
   getCounterPendientes():Observable<any>{

    return this.tareasCountSubject.asObservable()
  
   }
   tareasCounter(){

    this.tareasCountSubject.next(this.tareas.length);
   }
/////////////////////////////////////////////////////////
 counterTareasdone(){
         
      this.hechasSubjectCounter.next(this.hechasSubjectCounter.value + 1) 
 }
 
 getCounterHechas():Observable<any> {
  
return this.hechasSubjectCounter.asObservable()

 }
///////////////////////////////////////////////////////////7

getHechasLista():Observable<any>{
  return this.hechasListaSubject.asObservable()
}


markTareaskAsDone(taskIndex: number): void {
  
  if (taskIndex >= 0 && taskIndex < this.tareas.length) {
    
    const tareaEliminada = this.tareas[taskIndex];
   
    this.tareas.splice(taskIndex, 1); 
    this.completedTareas.push(tareaEliminada)
    this.hechasListaSubject.next(this.completedTareas)
    this.tareasSubject.next(this.tareas );
    this.tareasCounter()
    this.counterTareasdone()
  
  }
} 



  constructor() { }
}

