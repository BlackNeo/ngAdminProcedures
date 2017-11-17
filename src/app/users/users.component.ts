import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Users } from './../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  @Input() users: Users[] = [
    {'_id': '00001', 'name': 'zerosum', 'password': '1234'},
    {'_id': '00002', 'name': 'zerosum1', 'password': '12341'},
    {'_id': '00003', 'name': 'zerosum2', 'password': '12342'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
