"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicle");
class Motorcycle extends Vehicle_1.default {
    constructor(motorcycle) {
        super({
            id: motorcycle.id,
            model: motorcycle.model,
            year: motorcycle.year,
            color: motorcycle.color,
            status: motorcycle.status,
            buyValue: motorcycle.buyValue,
        });
        this.category = motorcycle.category;
        this.engineCapacity = motorcycle.engineCapacity;
    }
}
exports.default = Motorcycle;
