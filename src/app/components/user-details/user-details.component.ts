import { Component, Input } from '@angular/core';
import { IUser } from '../../interface/user/user.interface';
import { UsersList } from '../../data/users-list';


@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = {} as IUser;
}
