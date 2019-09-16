import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
import { fadeInLeft, flip, fadeInRight, fadeInUp} from 'ng-animate';
import { DataService } from '../data.service';
import { Events } from '@ionic/angular';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeInLeft', [
      transition( '* => *', useAnimation(fadeInLeft),
        {
          params: { timing: 2, delay: 0 }
        }
      )
    ]),
    trigger('fadeInRight', [
      transition( '* => *', useAnimation(fadeInRight),
        {
          params: { timing: 2, delay: 0 }
        }
      )
    ])
  ]
})


export class HomePage implements OnInit{

  isMenuOpen=false;

  imageData:any=[];

   coverImageSource:any=[

   ]
  
   state='start'
   
  @ViewChild('menu', {static: false}) menu: ElementRef;

  contactUs={
    id:null,
    phone:null,
    fax:null,
    email:null,
    location: null
  }
  constructor(private scrollToService: ScrollToService,private service: DataService, public events: Events,public meta: Meta, public title: Title) {}
  
  ngOnInit(){

    this.title.setTitle("WyMo-An award winning agency");
    
    //this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular'});

    this.service.getContactUs().subscribe(res=>{
      this.contactUs=res['0'];
     })

     this.service.getHomeCoverImage().subscribe(res=>{
       this.imageData=res;
       let temp;
       for(let i=0; i<this.imageData.length; i++){
         temp="http://aptest.therssoftware.com/pwa_backend/assets/cover/"+this.imageData[i].image
         this.coverImageSource.push( temp);
       }
       console.log(this.coverImageSource);
     })
  }

  public triggerScrollToOffsetOnly(offset) {
    
    const config: ScrollToConfigOptions = {
      offset
    };

    this.scrollToService.scrollTo(config);
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



// ,
//     trigger('fadeInDown', [ 
//       state('fadeInUpDownLeftStart', style({
//         opacity: '0',
//         transform: 'translateY(-100px)'
//       })),
//       state('end', style({
//         opacity: '1',
//         transform: 'translateY(0px)'
//       })),
//       transition('fadeInUpDownLeftStart=>end', animate('500ms'))
//     ]),
//     trigger('fadeInUp', [ 
//       state('fadeInUpDownLeftStart', style({
//         opacity: '0',
//         transform: 'translateY(100px)'
//       })),
//       state('end', style({
//         opacity: '1',
//         transform: 'translateY(0px)'
//       })),
//       transition('fadeInUpDownLeftStart=>end', animate('500ms'))
//     ]),
//     trigger('fadeInLeft2', [ 
//       state('fadeInUpDownLeftStart', style({
//         opacity: '0',
//         transform: 'translateX(-80px)'
//       })),
//       state('end', style({
//         opacity: '1',
//         transform: 'translateX(0px)'
//       })),
//       transition('fadeInUpDownLeftStart=>end', animate('500ms'))
//     ]),