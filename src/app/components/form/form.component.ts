import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userCreationStatus = 'No User is created';
  empty = false;
  username = '';

  constructor() { }

  ngOnInit() {
  }

  onCreateUser() {
    this.userCreationStatus = 'User was created! Name is ' + this.username;
  }

  onUpdateUserName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

}
