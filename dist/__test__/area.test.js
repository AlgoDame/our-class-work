"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_shape_1 = require("../controller/calculate-shape");
describe('Calculate area of shape', function () {
    it('should calculate area of a shape with 2 sides', function () {
        var rectangle = { a: 5, b: 10 };
        expect(calculate_shape_1.calculate(rectangle)).toEqual(5 * 10);
    });
});
