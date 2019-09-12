import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
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

  images:any=[];

  imageSources:any=[
   'https://cdn.dribbble.com/users/3272371/screenshots/6808066/folded_business_card_mockup_3_2x.jpg']
  
   state='start'
   
  @ViewChild('menu', {static: false}) menu: ElementRef;
  contactUs={
    id:null,
    phone:null,
    fax:null,
    email:null,
    location: null
  }
  constructor(private service: DataService, public events: Events) {}
  
  ngOnInit(){
    this.service.getContactUs().subscribe(res=>{
      this.contactUs=res['0'];
     })

     this.service.getHomeCoverImage().subscribe(res=>{
      this.images=res;
      for(let i=0; i<this.images.length; i++){
          this.imageSources.push(res[i].title);
       }
     
      console.log(this.imageSources)
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