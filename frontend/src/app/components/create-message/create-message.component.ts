import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent {

  message = {
    title: '',
    message: ''
  }

  constructor(
    private eventsService: EventsService,
    private router: Router
  ){

  }

  ngOnInit(){

  }

  createdMessage(){
    console.log(this.message);
    
    this.eventsService.CreatedMessage(this.message)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/allmessages'])
      },
      err =>{
        console.log(err);
        
      }
    )
  }

}
