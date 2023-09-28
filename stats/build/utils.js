"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split("/");
    const [day, month, year] = dateParts.map((value) => parseInt(value));
    return new Date(year, month, day);
};
exports.dateStringToDate = dateStringToDate;
