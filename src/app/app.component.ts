import { Component } from '@angular/core';
import { IUser } from './interface/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSelected: IUser = UsersList[0];

  onUserSelected(user: IUser) {
    this.userSelected = user;
  }
}
