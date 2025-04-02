import { Component } from '@angular/core';
import { IUser } from './interface/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSelected: IUser =     {
    name: "Joks Silva",
    email: "silva.joks@example.com",
    password: "secure-password-123",
    address: "Rua das Flures",
    city: "São Paulo",
    state: "SP",
    country: "Brazil",
    phone: "11912345678",
    role: "Developer",
    registrationDate: "2023-08-01T00:00:00.000Z",
    status: {
        online: true,
        verified: true,
        activeSubscription: true,
        lastAccess: "2023-08-08T19:00:06.000Z"
    }
};
}
