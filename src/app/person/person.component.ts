import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: any = null;
  value = "";

  constructor(private _send: SendMessageService) { }

  ngOnInit(): void {
  }

  send(){
    this._send.sendMessage({person: this.person.name, message: this.value});
    this.value = "";
  }

  control = new FormControl();

}
