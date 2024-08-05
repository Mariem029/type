"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const car_1 = require("./car");
const myCar = new car_1.Car('Toyota', 'Corolla', 2022);
myCar.start(); // Should log: "Car engine started"
