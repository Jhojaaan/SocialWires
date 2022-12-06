import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css']
})
export class AllMessagesComponent implements OnInit{

  messages:any = [];

  constructor(private eventsService: EventsService){

  }

  ngOnInit(){
    this.eventsService.getMessages()
    .subscribe(
      res =>{
        console.log(res);
        this.messages = res;
      },
      err => {
        console.log(err);
        
      }
    )
  }

}
