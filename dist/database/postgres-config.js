"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personDB = void 0;
var postgres_1 = __importDefault(require("postgres"));
var connectionString = process.env.DATABASE_URL;
var sql = postgres_1.default(connectionString);
function personDB() {
    sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["SELECT 1=1"], ["SELECT 1=1"]))).then(function (con) {
        console.log("Connected to postgreSQL");
    }).catch(function (err) {
        console.log({ Error: err.message });
    });
}
exports.personDB = personDB;
exports.default = sql;
var templateObject_1;
