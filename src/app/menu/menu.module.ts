import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [MenuComponent],
  exports:[MenuComponent]
})
export class MenuModule {}
