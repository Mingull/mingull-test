const members = new Map<MemberId, Member>();

type MemberId = string;
type MemberUsername = string;
type MemberFirstname = string;
type MemberLastname = string;
// type MemberInventory = Items;

export class Member {
    id: MemberId;
    username: MemberUsername;
    firstname: MemberFirstname;
    lastname: MemberLastname;
    inventory: [];
    constructor(username: MemberUsername, firstname: MemberFirstname, lastname: MemberLastname, inventory: []) {
        this.id = Math.round(Math.random() * 1000000).toString();
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.inventory = inventory;
        members.set(this.id, this);
    }
}

export class Admin extends Member {
    getAllMembers() {
        return members
    }
}

export class Item {
    name: string;
    amount: number;
    prize: number;
    constructor(name: string, amount: number, prize: number) {
        this.name = name;
        this.amount = amount;
        this.prize = prize;
    }

    setName(name: string) {
        if (typeof name === "string") {
            this.name = name;
        } else {
            throw new Error("name isn't a string");
        }
        return this;
    }

    setAmount(amount: number) {
        if (typeof amount === "number") {
            this.amount = amount;
        } else {
            throw new Error("Amount isn't a number");
        }
        return this;
    }

    setPrize(prize: number) {
        if (typeof prize === "number") {
            this.prize = prize;
        } else {
            throw new Error("Prize isn't a number");
        }
        return this;
    }
}