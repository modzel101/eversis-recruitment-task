import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  personForm;
  name: string;
  surname: string;
  age: number;

  constructor() { }

  ngOnInit(): void {
    this.personForm = new FormGroup({
      name: new FormControl(this.name, Validators.pattern(/[a-zA-Z]/)),
      surname: new FormControl(this.surname, Validators.pattern(/[a-zA-Z]/)),
      age: new FormControl(this.age, Validators.pattern(/^[0-9]*$/))
    });
  }

}
