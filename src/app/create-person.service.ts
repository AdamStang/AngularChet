import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePersonService {

  private _create = new Subject<any>();
  create$ = this._create.asObservable()

  constructor() { }

  createPerson(person: any){
    this._create.next(person);
  }
}
