import { Component } from '@angular/core';
import { IUser } from '../../interface/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-table',
  standalone: false,
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  dataSource: IUser[] = UsersList;

  onUserSelected(user: IUser) {
    console.log(user);
  }
}
