"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, amount, prize) {
        this.name = name;
        this.amount = amount;
        this.prize = prize;
    }
    setName(name) {
        if (typeof name === "string") {
            this.name = name;
        }
        else {
            throw new Error("name isn't a string");
        }
        return this;
    }
    setAmount(amount) {
        if (typeof amount === "number") {
            this.amount = amount;
        }
        else {
            throw new Error("Amount isn't a number");
        }
        return this;
    }
    setPrize(prize) {
        if (typeof prize === "number") {
            this.prize = prize;
        }
        else {
            throw new Error("Prize isn't a number");
        }
        return this;
    }
}
exports.Item = Item;
//# sourceMappingURL=Item.js.map