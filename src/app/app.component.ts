import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'the-learners-angular-unit-testing';

  add(num1: number, num2: number) {
    console.log('original add');
    return num1 + num2;
  }
}
