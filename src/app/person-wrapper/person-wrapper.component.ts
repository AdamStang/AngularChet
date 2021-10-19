import { Component, OnInit } from '@angular/core';
import { CreatePersonService } from '../create-person.service';

@Component({
  selector: 'app-person-wrapper',
  templateUrl: './person-wrapper.component.html',
  styleUrls: ['./person-wrapper.component.css']
})
export class PersonWrapperComponent implements OnInit {

  persons = [{id: 1, name: "Person 1"}]

  constructor(private _create: CreatePersonService) { }

  ngOnInit(): void {
    this._create.create$
      .subscribe(
        person => {
          if(person == "create"){
            this.addPerson();
          } 
        }
      )
  }

  addPerson(){
    if(this.persons.length < 9){
      let nextId = this.persons.length + 1;
      this.persons.push({id: nextId, name: "Person " + nextId});
      console.log(nextId);
    }
  }

}
