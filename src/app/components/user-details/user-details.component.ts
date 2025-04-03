import { Component, Input, ViewChild } from '@angular/core';
import { IUser } from '../../interface/user/user.interface';
import { UsersList } from '../../data/users-list';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = {} as IUser;


  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    if (!this.drawer.opened) {
      this.drawer.toggle();
    }
  }
}
