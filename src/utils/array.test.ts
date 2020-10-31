import { limitsToArray } from "./array";

test('Test limits to array function basic', () => {
    const limits = {
        min: 1,
        max: 3,
        step: 0.5
    }
    const solution = [1, 1.5, 2, 2.5, 3]

    const ansArray = limitsToArray(limits.min, limits.max, limits.step);

    expect(ansArray).toStrictEqual(solution);
});

test('Test limits to array function over', () => {
    const limits = {
        min: 1,
        max: 5,
        step: 1.5
    }
    const solution = [1, 2.5, 4]

    const ansArray = limitsToArray(limits.min, limits.max, limits.step);

    expect(ansArray).toStrictEqual(solution);
});
