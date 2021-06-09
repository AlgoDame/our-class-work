import { calculate } from '../controller/calculate-shape';

describe('Calculate area of shape', () => {
    it('should calculate area of a shape with 2 sides',  () => {
        let rectangle = { a: 5, b: 10 };
        expect(calculate(rectangle)).toEqual(5 * 10);

    })
})