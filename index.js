const { Admin, Member, Item } = require("./lib/index");

const member = new Member("Bobbie1234", "bob", "lastname");
const admin = new Admin("MingullAdmin", "Admin", "Power");
const item = new Item()

try {
    console.log(admin.getAllMembers())
} catch (e) {
    console.log(e);
}