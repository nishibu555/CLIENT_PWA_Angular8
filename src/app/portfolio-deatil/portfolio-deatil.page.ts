import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-portfolio-deatil',
  templateUrl: './portfolio-deatil.page.html',
  styleUrls: ['./portfolio-deatil.page.scss'],
})
export class PortfolioDeatilPage implements OnInit {
  isMenuOpen=false;
  slideOpts = {
    speed: 400,
    slidesPerView: 3,
    imageViewer: true
  };

  portfolioId;
  portfolio={
    id: null,
    title: null,
    website: null,
    description: null,
    technology: null,
    client: null,
    show_hide: null,
    created_at: null,
    updated_at: null
  }
  portfolioSlidingImage:any=[];
  topImage;

  constructor(
    private route: ActivatedRoute,
    protected service: DataService,
    public events: Events) { }

  ngOnInit() {
    this.portfolioId = this.route.snapshot.paramMap.get("portfolioId");

    this.service.getPortfolioById(this.portfolioId).subscribe(res=>{
      this.portfolio=res;
    })
    
    this.service.gePortfolioImageById(this.portfolioId).subscribe(res=>{
      for(let i=0; i<res.length; i++){
        if(res[i].type == 1){
          this.topImage=res[i].image;
        }
        if(res[i].type == 0){
          this.portfolioSlidingImage.push(res[i]);
        }
      }
    })

  }

    
  openMenu(){
    this.isMenuOpen=true;
    this.events.publish('isMenuOpen', true);
    this.events.subscribe('isMenuOpen', (res) => {
      this.isMenuOpen=res;
    });
  }


}
