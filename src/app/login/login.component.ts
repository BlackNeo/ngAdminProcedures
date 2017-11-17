import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Users } from './../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  users: Users[] = [
    {'_id': '00001', 'name': 'zerosum', 'password': '1234'},
    {'_id': '00002', 'name': 'zerosum1', 'password': '12341'},
    {'_id': '00003', 'name': 'zerosum2', 'password': '12342'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
