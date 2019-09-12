import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  animations: [
    trigger('fadeInLeft', [ 
      state('start', style({
        opacity: '0',
        transform: 'translateX(-20px)'
      })),
      state('end', style({
        opacity: '1',
        transform: 'translateX(0px)'
      })),
      transition('start=>end', animate('200ms'))
    ])
  ]

})

export class PortfolioPage implements OnInit {
 
  portfolioImage:any=[];
  state='start'

  category:any=[];
  isMenuOpen=false;

  constructor(private service: DataService, public events: Events) { }

  ngOnInit() {
    this.service.getAllPortfolioImage().subscribe(res=>{
      this.portfolioImage=res;
      console.log(res)
    })

    this.service.getAllPortfolioCategory().subscribe(res=>{
      this.category=res;
      console.log(res)
     })
  }
  
  openMenu(){
    this.isMenuOpen=true;
    this.events.publish('isMenuOpen', true);
    this.events.subscribe('isMenuOpen', (res) => {
      this.isMenuOpen=res;
    });
  }


  end(){
    this.state='end'
  }
  
}
