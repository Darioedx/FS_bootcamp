
import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
export const routes: Routes = [{
    path : '',
    component: ListaProductosComponent,
    title: 'Home page',
},
{
    path : 'formulario',
    component: FormularioComponent,
    title: 'Modificar',
}, 
];