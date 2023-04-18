import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css'],
})
export class InactiveUserComponent implements OnInit {
  constructor(private users: UserService) {}
  deleteUuser: any;
  inactiveUser: any;

  ngOnInit(): void {
    this.inactiveUser = this.users.filterInativeUsers();
    console.log('inative user filter', this.inactiveUser);
  }

  switchUser(index: number) {
    // function returns delete users
    this.deleteUuser = this.inactiveUser.splice(index, 1);
    console.log('deleteUSer', this.deleteUuser);
    // using map tochange boolena value in original data arry
    this.users.users.filter((user: { name: string; ativeOrNot: boolean }) => {
      if (user.name === this.deleteUuser[0].name) {
        return (user.ativeOrNot = true);
        // console.log(this.deleteUuser[0].name);
      }
      return true;
    });
    this.users.users.filter((user: { name: any; messsage: string }) => {
      if (user.name === this.deleteUuser[0].name) {
        return (user.messsage = 'set to inative');
      }
      return true;
    });
    console.log(this.inactiveUser, this.users);
  }
}
