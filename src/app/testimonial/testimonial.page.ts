import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Events } from '@ionic/angular';
import { Meta, Title } from '@angular/platform-browser';

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
  coverImageData:any={}
 
  allTestimonial:any=[];

  constructor(public title: Title,private service: DataService, private events: Events) { }

  ngOnInit() {
    
    this.title.setTitle("WyMo-testimonial");

    this.service.getAllTestimonial().subscribe(res=>{
      this.allTestimonial=res;
      (this.allTestimonial)
    });

    this.service.getTestimonialCoverImage().subscribe(res=>{
      this.coverImageData = res;
      console.log(this.coverImageData.image);
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
