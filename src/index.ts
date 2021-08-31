const users: User[] = []
export class User {
    firstname: string;
    lastname: string
    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        users.push(this);
    }
}
export class Admin extends User {
    getAllUsers() {
        return users
    }
}