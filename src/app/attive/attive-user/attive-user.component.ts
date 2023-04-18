import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-attive-user',
  templateUrl: './attive-user.component.html',
  styleUrls: ['./attive-user.component.css'],
})
export class AttiveUserComponent implements OnInit {
  constructor(private users: UserService) {}
  deleteUuser: any;
  ativeUser: any;
  ngOnInit(): void {
    this.ativeUser = this.users.filterActiveUuser();
  }
  switchUser(index: number) {
    // function returns delete users
    this.deleteUuser = this.ativeUser.splice(index, 1);
    console.log('deleteUSer', this.deleteUuser);
    // using map tochange boolena value in original data arry
    this.users.users.filter((user: { name: string; ativeOrNot: boolean }) => {
      if (user.name === this.deleteUuser[0].name) {
        return (user.ativeOrNot = false);
        // console.log(this.deleteUuser[0].name);
      }
      return true;
    });
    this.users.users.filter((user: { name: any; messsage: string }) => {
      if (user.name === this.deleteUuser[0].name) {
        return (user.messsage = 'set to ative');
      }
      return true;
    });
    console.log(this.ativeUser, this.users);
  }
}
