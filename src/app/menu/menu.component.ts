import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
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
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[
    
    trigger('fadeInDown', [ 
      state('fadeInUpDownLeftStart', style({
        opacity: '0',
        transform: 'translateY(-100px)'
      })),
      state('end', style({
        opacity: '1',
        transform: 'translateY(0px)'
      })),
      transition('fadeInUpDownLeftStart=>end', animate('500ms'))
    ]),
    trigger('fadeInUp', [ 
      state('fadeInUpDownLeftStart', style({
        opacity: '0',
        transform: 'translateY(100px)'
      })),
      state('end', style({
        opacity: '1',
        transform: 'translateY(0px)'
      })),
      transition('fadeInUpDownLeftStart=>end', animate('500ms'))
    ]),
    trigger('fadeInLeft2', [ 
      state('fadeInUpDownLeftStart', style({
        opacity: '0',
        transform: 'translateX(-80px)'
      })),
      state('end', style({
        opacity: '1',
        transform: 'translateX(0px)'
      })),
      transition('fadeInUpDownLeftStart=>end', animate('500ms'))
    ]),
  ]
})
export class MenuComponent implements OnInit {
    
  state='fadeInUpDownLeftStart'
  
  contactUs={
    id:null,
    phone:null,
    fax:null,
    email:null,
    location: null
  }

  @ViewChild('menu', {static: false}) menu: ElementRef;
 

  constructor(
    private router: Router,private service: DataService,public events: Events) { }

  ngOnInit() {
     
    this.state="fadeInUpDownLeftStart"
    this.service.getContactUs().subscribe(res=>{
      this.contactUs=res['0'];
     })
  }
  onContact(){
    this.router.navigateByUrl('/contact'); 
  }
  onPortfolio(){
    this.router.navigateByUrl('/portfolio'); 
  }
  onAbout(){
    this.router.navigateByUrl('/about'); 
  }
  onTestimonial(){
    this.router.navigateByUrl('/testimonial'); 
  }

  closeMenu(){
    this.events.publish('isMenuOpen', false);
    this.menu.nativeElement.style.display='none'
  }

  end(){
    this.state='end'
  }
}
