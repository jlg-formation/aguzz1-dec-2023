import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyComponent
  ]
})
export class LayoutModule { }
