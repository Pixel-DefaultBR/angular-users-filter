import { IStatus } from "./status.interface"

export interface IUser {
    name: string;
    email: string;
    password: string;
    address: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    role: string;
    registrationDate: string;
    status: IStatus;
}