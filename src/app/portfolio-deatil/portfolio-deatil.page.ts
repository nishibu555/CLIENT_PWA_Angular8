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
import { Meta, Title } from '@angular/platform-browser';
import { LoadingController, AlertController } from '@ionic/angular';

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
  clickedSlidingImage:any='';
  
  topImage; //cover photo
  isLoading = false;
  constructor(public title: Title,
    private route: ActivatedRoute,
    protected service: DataService,
    public events: Events,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.portfolioId = this.route.snapshot.paramMap.get("portfolioId");

    this.isLoading = true;
    this.loadingCtrl.create({ keyboardClose: true, message: 'Logging in' })
    .then(loading=>{
       loading.present();
        this.service.getPortfolioById(this.portfolioId).subscribe(res=>{
          this.portfolio=res;
          this.title.setTitle("WyMo-"+res.title);
          loading.dismiss();
          this.isLoading = false;
        })
        loading.present();
        this.service.gePortfolioImageById(this.portfolioId).subscribe(res=>{
          //type 1 main image will set to top image. 
          // type o and 1 both will set to sliding image, 
          for(let i=0; i<res.length; i++){
            if(res[i].type == 1){
              this.topImage=res[i].image;
              this.portfolioSlidingImage.push('http://aptest.therssoftware.com/pwa_backend/assets/uploads/portfolio/main/'+res[i].image)
            }
            if(res[i].type == 0){
              this.portfolioSlidingImage.push('http://aptest.therssoftware.com/pwa_backend/assets/uploads/portfolio/secondary/'+res[i].image);
            } 
          }
          console.log(this.portfolioSlidingImage)
          loading.dismiss();
          this.isLoading = false;
        })
    });
  }
    
  
  onSecondaryImage(image){
    this.clickedSlidingImage=image;
  }

  openMenu(){
    this.isMenuOpen=true;
    this.events.publish('isMenuOpen', true);
    this.events.subscribe('isMenuOpen', (res) => {
      this.isMenuOpen=res;
    });
  }


}
