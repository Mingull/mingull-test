"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = exports.members = void 0;
exports.members = new Map();
// type MemberInventory = Items;
class Member {
    constructor(username, firstname, lastname, inventory) {
        this.id = Math.round(Math.random() * 1000000).toString();
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.inventory = inventory;
        exports.members.set(this.id, this);
    }
}
exports.Member = Member;
//# sourceMappingURL=Member.js.map