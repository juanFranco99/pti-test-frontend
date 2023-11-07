import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentosListComponent } from './departamentos-list/departamentos-list.component';
import { DepartamentosEditComponent } from './departamentos-edit/departamentos-edit.component';



@NgModule({
  declarations: [
    DepartamentosListComponent,
    DepartamentosEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepartamentosModule { }
