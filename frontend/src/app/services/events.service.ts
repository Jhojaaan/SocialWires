import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private URL = 'http://localhost:3000/api/events'

  constructor(private http: HttpClient) { }

  CreatedMessage(message: any){
    return this.http.post<any>(this.URL + '/createmessage', message)
  }

  getMessages(){
    return this.http.get<any>(this.URL + '/allmessages');
  }

}
