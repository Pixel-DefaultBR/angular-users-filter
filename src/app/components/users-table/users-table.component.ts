import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() userSelectedEmit = new EventEmitter<IUser>();
  @Output() openDrawerEmit = new EventEmitter<void>();

  onUserSelected(user: IUser, event: Event) {
    this.userSelectedEmit.emit(user);
    this.openDrawerEmit.emit();
  }
}
