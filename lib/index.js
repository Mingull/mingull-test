"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.User = void 0;
const users = [];
class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        users.push(this);
    }
}
exports.User = User;
class Admin extends User {
    getAllUser() {
        return users;
    }
}
exports.Admin = Admin;
//# sourceMappingURL=index.js.map