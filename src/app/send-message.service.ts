import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  private _send = new Subject<any>();
  send$ = this._send.asObservable()

  constructor() { }

  sendMessage(message: any){
    this._send.next(message);
  }
}
