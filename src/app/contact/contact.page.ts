import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Events } from '@ionic/angular';

import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
import { flip, fadeInUp } from 'ng-animate';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  animations: [
    trigger('flip', 
    [transition('* => *', useAnimation( 
      flip,
      {
        params: { timing: 1, delay: 1}
      } 
    ))]
    ),
    trigger('fadeDown', [ 
      state('start', style({
        opacity: '0',
        transform: 'translateY(-20px)'
      })),
      state('end', style({
        opacity: '1',
        transform: 'translateY(0px)'
      })),
      transition('start=>end', animate('500ms'))
    ])
  ]
})
export class ContactPage implements OnInit {
  isMenuOpen=false;
  fadeDownState;
  contactUs={
    id:null,
    phone:null,
    fax:null,
    email:null,
    location: null
  };
  isLoading = false;
  sendMailMessage=false;

  constructor(public title: Title, private loadingCtrl: LoadingController,  private service: DataService, public events: Events) { }

  ngOnInit() {
    
    this.title.setTitle("WyMo-Contact");

    this.sendMailMessage=false;
    this.isLoading = true;

    this.loadingCtrl
    .create({ keyboardClose: true})
    .then(loading=>{
        loading.present();
        this.service.getContactUs().subscribe(res=>{
          this.contactUs=res['0'];
          loading.dismiss();
          this.isLoading = false;
        },error=>{
          loading.dismiss();
          this.isLoading = false;
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

  onSubmit(form: NgForm) {
    this.sendMailMessage=true;
    this.fadeDownState='start'

    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;
    
    this.service.sendMail(name, email, message).subscribe(res=>{

    });
    form.reset();
  }
  fadeDownEnd(){
    this.fadeDownState='end'
  }
}
