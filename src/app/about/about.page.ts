import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Title } from '@angular/platform-browser';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  isMenuOpen=false;
  about:any=[];

  constructor(public title: Title,private service: DataService,public events: Events) { }

  ngOnInit() {
    
    this.title.setTitle("WyMo-Contact");
    this.service.getAbouUs().subscribe(res=>{
     console.log(res)
     this.about=res;
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
