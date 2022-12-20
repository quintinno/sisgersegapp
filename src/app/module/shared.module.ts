import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonIconComponent } from './../component/button-icon/button-icon.component';
import { ButtonPrimaryComponent } from './../component/button-primary/button-primary.component';
import { InputTextComponent } from './../component/input-text/input-text.component';

@NgModule({
  declarations: [
    InputTextComponent,
    ButtonIconComponent,
    ButtonPrimaryComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InputTextComponent,
    ButtonIconComponent,
    ButtonPrimaryComponent
  ]
})
export class SharedModule { }
