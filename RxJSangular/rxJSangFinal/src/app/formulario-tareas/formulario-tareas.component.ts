import { Component, inject } from '@angular/core';
import { TareasService } from '../tareas.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario-tareas',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
  <form [formGroup]='addForm'>
    <h2>Añadir Nueva Tarea</h2>
    <input type="text" formControlName="tarea" placeholder="Escribe una nueva tarea...">
    <button (click)="addTarea()">Agregar</button>
  </form>
`,                                                   
  styleUrl: './formulario-tareas.component.css'
})
export class FormularioTareasComponent {
  addForm = new FormGroup(
    {

    tarea: new FormControl(''),
   
   })
 
   private tareasService: TareasService = inject(TareasService)
 // constructor(private tareasService: TareasService) {}

  addTarea(): void {
    if (this.addForm.value.tarea) {
      this.tareasService.addTareas(this.addForm.value.tarea.trim());
    
      this.addForm.patchValue({ tarea: '' });
    }
  }

}
