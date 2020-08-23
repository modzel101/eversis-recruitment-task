import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  name: string;
  surname: string;
  age: string;

  nameInvalid = false;
  surnameInvalid = false;
  ageInvalid = false;

  namesRegexp = new RegExp('^[a-zA-Z]*$');
  ageRegexp = new RegExp('^[0-9]*$');


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveClick() {
    localStorage.setItem('name', this.name);
    localStorage.setItem('surname', this.surname);
    localStorage.setItem('age', this.age);
    this.router.navigate(['/page2']);
  }

  nameValidation() {
    if (this.namesRegexp.test(this.name)) {
      this.nameInvalid = false;
      console.log('name validation false');
    }
    else {
      this.nameInvalid = true;
    }
    console.log('name validation');
  }

  surnameValidation() {
    if (this.namesRegexp.test(this.surname)) {
      this.surnameInvalid = false;
    }
    else {
      this.surnameInvalid = true;
    }
    console.log('surname validation');

  }

  ageValidation() {
    if (this.ageRegexp.test(this.age)) {
      this.ageInvalid = false;
    }
    else {
      this.ageInvalid = true;
    }
    console.log('age validation');

  }
}
