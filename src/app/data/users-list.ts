import { IUser } from "../interface/user/user.interface";

export const UsersList: IUser[] = [
    {
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
    },
    {
        name: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        password: "secure-password-124",
        address: "Rua das Laranjeiras",
        city: "São Paulo",
        state: "SP",
        country: "Brazil",
        phone: "11923456789",
        role: "Designer",
        registrationDate: "2023-07-15T00:00:00.000Z",
        status: {
            online: false,
            verified: true,
            activeSubscription: false,
            lastAccess: "2023-07-20T14:25:00.000Z"
        }
    },
    {
        name: "Carlos Souza",
        email: "carlos.souza@example.com",
        password: "secure-password-125",
        address: "Rua do Sol",
        city: "São Paulo",
        state: "SP",
        country: "Brazil",
        phone: "11934567890",
        role: "Project Manager",
        registrationDate: "2023-06-12T00:00:00.000Z",
        status: {
            online: true,
            verified: true,
            activeSubscription: true,
            lastAccess: "2023-08-08T12:05:25.000Z"
        }
    },
    {
        name: "Juliana Costa",
        email: "juliana.costa@example.com",
        password: "secure-password-126",
        address: "Rua das Acácias",
        city: "São Paulo",
        state: "SP",
        country: "Brazil",
        phone: "11945678901",
        role: "Marketing Specialist",
        registrationDate: "2023-04-21T00:00:00.000Z",
        status: {
            online: false,
            verified: true,
            activeSubscription: false,
            lastAccess: "2023-04-25T10:45:30.000Z"
        }
    },
    {
        name: "Gabriel Santos",
        email: "gabriel.santos@example.com",
        password: "secure-password-127",
        address: "Rua da Paz",
        city: "São Paulo",
        state: "SP",
        country: "Brazil",
        phone: "11956789012",
        role: "QA Engineer",
        registrationDate: "2023-09-05T00:00:00.000Z",
        status: {
            online: true,
            verified: true,
            activeSubscription: true,
            lastAccess: "2023-09-05T17:30:10.000Z"
        }
    }
]

