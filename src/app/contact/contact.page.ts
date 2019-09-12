import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Events } from '@ionic/angular';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  isMenuOpen=false;
  contactUs={
    id:null,
    phone:null,
    fax:null,
    email:null,
    location: null
  }
  constructor(  private service: DataService, public events: Events) { }

  ngOnInit() {
    this.service.getContactUs().subscribe(res=>{
      this.contactUs=res['0'];
     })
  }
 
  openMenu(){
    this.isMenuOpen=true;
    this.events.publish('isMenuOpen', true);
    this.events.subscribe('isMenuOpen', (res) => {
      this.isMenuOpen=res;
    });
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;
    
    this.service.sendMail(name, email, message).subscribe(res=>{

    });
    form.reset();
  }
}
