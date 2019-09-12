import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.page.html',
  styleUrls: ['./testimonial.page.scss'],
})
export class TestimonialPage implements OnInit {
  isMenuOpen=false;
  slideOpts = {
    speed: 400,
  };

 
  allTestimonial:any=[];

  constructor(private service: DataService, private events: Events) { }

  ngOnInit() {
    this.service.getAllTestimonial().subscribe(res=>{
      this.allTestimonial=res;
      console.log( this.allTestimonial)
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
