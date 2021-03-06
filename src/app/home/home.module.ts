import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SlideshowModule} from 'ng-simple-slideshow';
import { HomePage } from './home.page';
import { MenuModule } from '../menu/menu.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@NgModule({
  imports: [
    ScrollToModule.forRoot(),
    MenuModule,
    SlideshowModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
