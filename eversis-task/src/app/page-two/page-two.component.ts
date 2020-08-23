import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {


  name: string;
  surname: string;
  age: string;
  ageValidation = null;

  constructor() {
    this.name = localStorage.getItem('name');
    this.surname = localStorage.getItem('surname');
    this.age = localStorage.getItem('age');
  }

  ngOnInit(): void {
  }


  accessClick() {
    if (parseInt(this.age, 10) >= 18) {
      this.ageValidation = true;
    }
    else {
      this.ageValidation = false;
    }
  }
}
