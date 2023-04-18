import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users: any = [
    { name: 'sava', ativeOrNot: true, messsage: '' },
    { name: 'olivera', ativeOrNot: true, messsage: '' },
    { name: 'tijana', ativeOrNot: false, messsage: '' },
    { name: 'marko', ativeOrNot: false, messsage: '' },
  ];

  filterInativeUsers() {
    const user = this.users.filter(
      (user: { ativeOrNot: boolean }) => user.ativeOrNot === false
    );
    user.map((user: { messsage: string }) => (user.messsage = 'set to ative'));
    console.log(this.users);
    return user;
  }
  filterActiveUuser() {
    const user = this.users.filter(
      (user: { ativeOrNot: boolean }) => user.ativeOrNot
    );

    user.map(
      (user: { messsage: string }) => (user.messsage = 'set to inative')
    );
    return user;
  }
}
