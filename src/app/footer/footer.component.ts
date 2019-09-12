import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('progressBar', [
      state('start', style({
      
      })),
      state('end', style({
        width: '100%'
      })),
      transition('start=>end', animate('3000ms'))
    ]),

  ]
})
export class FooterComponent implements OnInit {
  contactUs={
    id:null,
    phone:null,
    fax:null,
    email:null,
    location: null
  }
  progress='start'
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getContactUs().subscribe(res=>{
      this.contactUs=res['0'];
     })
  }
  endProgress(){
    this.progress='end'
  } 
}
