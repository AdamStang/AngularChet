import { Component, OnInit } from '@angular/core';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: any = [];

  constructor(private _send: SendMessageService) { }

  ngOnInit(): void {
    this._send.send$
      .subscribe(
        message => {
          if(message.message != ""){
            var nextId = this.messages.length + 1;
            this.messages.push({id: nextId, person: message.person, message: message.message})
          }
        }
      )
  }

  clear(){
    this.messages = [];
  }

}
