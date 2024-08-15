import { Component, inject } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Products } from '../interface/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  private dataService:DataService = inject(DataService)
  private router: Router=inject(Router);
  formSubmitted: boolean = false;
  id: number = 0;
 
  ngOnInit(): void {
    
    this.dataService.getProducts().subscribe({next:(data)=> {
      this.id= data.length + 1 
    }
    
  })
  }
  addForm = new FormGroup(
    {
    //id :new FormControl(null,Validators.required),
    title: new FormControl('',Validators.required),
    price: new FormControl(null,Validators.required),
    description: new FormControl('',Validators.required),
    images: new FormControl('',Validators.required),
   }
  
   )
   addNewProduct(){
    this.formSubmitted = true;
 
    if (this.addForm.valid){
      
    let body : Products ={
      
     "id":this.id,
         "title": this.addForm.value.title!,
         "price": this.addForm.value.price!,
         "description":this.addForm.value.description!,
         "images": this.addForm.value.images!
    }
    this.dataService.addProducts(body).subscribe({
    next:(data)=>{console.log(data),alert('Articulo añadido!!'), this.router.navigate([''])},
    error: (err: any) => {console.error(err), alert('algo salio mal!!'), this.router.navigate([''])}
     })
    
    }
    
    
  }

}
