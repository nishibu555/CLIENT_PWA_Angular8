import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactPage } from './contact.page';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [
    FooterModule,
    MenuModule,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
