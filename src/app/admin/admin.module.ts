import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddnewmovieComponent } from './addnewmovie/addnewmovie.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddnewmovieComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
