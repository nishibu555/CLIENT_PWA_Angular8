import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestimonialPage } from './testimonial.page';
import { FooterModule } from '../footer/footer.module';
import { MenuModule } from '../menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: TestimonialPage
  }
];

@NgModule({
  imports: [
    MenuModule,
    FooterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestimonialPage]
})
export class TestimonialPageModule {}
