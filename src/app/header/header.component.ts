import { Component, OnInit } from '@angular/core';
import { CreatePersonService } from '../create-person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _create: CreatePersonService) { }

  ngOnInit(): void {
  }

  create(){
      this._create.createPerson("create");
  }

}
