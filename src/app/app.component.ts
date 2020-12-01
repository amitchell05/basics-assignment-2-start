import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  disableButton: boolean = true;

  constructor() {
  }

  checkUsername() {
    if (this.username === '') {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
  }

  resetUsername() {
    if (this.username !== '') {
      this.username = '';
      this.disableButton = true;
    }
  }
}
