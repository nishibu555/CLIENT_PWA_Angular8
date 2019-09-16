import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Meta, Title } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
import { Events } from '@ionic/angular';

import { fadeInDown} from 'ng-animate';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  animations: [
    //cover image
    trigger('fadeInDown', [
      transition( '* => *', useAnimation(fadeInDown),
        {
          params: { timing: 1, delay: 0 }
        }
      )
    ]),
    //overlay tile
    trigger('FadeInDown', [ 
      state('start', style({
        opacity: '1',
        transform: 'translateY(-60%)'
      })),
      state('end', style({
        opacity: '1',
        transform: 'translateY(0)'
      })),
      transition('start=>end', animate('350ms')),
    ]),
    //overlay subtitle
    trigger('FadeInSpacing', [ 
      state('start', style({
        opacity: '0',
      })),
      state('end', style({
        opacity: '1',
        letterSpacing: '3px'
      })),
      transition('start=>end', animate('400ms 330ms') )
    ])
  ]

})

export class PortfolioPage implements OnInit {
  isLoading = false;
  portfolioImage:any=[];
  state:any; 
  stateFadeInSpacing:any;

  category:any=[];
  isMenuOpen=false;
  coverImageData:any={}

  constructor(public title: Title,
    private loadingCtrl: LoadingController,private service: DataService, public events: Events) { }

  ngOnInit() {
    this.title.setTitle("WyMo-Portfolio");

    this.isLoading = true;
    this.loadingCtrl.create({ keyboardClose: true, message: 'Logging in' })
    .then(loading=>{
        loading.present();
        this.service.getPortfolioCoverImage().subscribe(res=>{
          this.coverImageData = res;
          loading.dismiss();
        });

        loading.present();
        this.service.getAllPortfolioImage().subscribe(res=>{
          this.portfolioImage=res;
          loading.dismiss();
          this.isLoading = false;
        });

        this.service.getAllPortfolioCategory().subscribe(res=>{
          this.category=res;
        })
    });
  
  }
  
  openMenu(){
    this.isMenuOpen=true;
    this.events.publish('isMenuOpen', true);
    this.events.subscribe('isMenuOpen', (res) => {
      this.isMenuOpen=res;
    });
  }

  startFadeInDown(){
    this.state='start';
  }

  endSate(){
    this.state='end';
    this.stateFadeInSpacing='start'
  }
  endFadeInSpacing(){
    this.stateFadeInSpacing='end';
  }
  
}
