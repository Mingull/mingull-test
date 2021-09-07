"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const Member_1 = require("./Member");
class Admin extends Member_1.Member {
    getAllMembers() {
        return Member_1.members;
    }
}
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map