import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PortfolioDeatilPage } from './portfolio-deatil.page';
import { FooterModule } from '../footer/footer.module';
import { MenuModule } from '../menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: PortfolioDeatilPage
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
  declarations: [PortfolioDeatilPage]
})
export class PortfolioDeatilPageModule {}
