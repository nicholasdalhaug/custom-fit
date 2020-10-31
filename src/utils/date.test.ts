import { isToday } from "./date";

describe('Test date utils', () => {
    test('Test today', () => {
        const today = new Date();

        const isTodayAns: boolean = isToday(today);

        expect(isTodayAns).toStrictEqual(true);
    });

    test('Test yesterday', () => {
        const today = new Date();
        const yesterday: Date = new Date();
        yesterday.setDate(today.getDate() - 1);

        const isTodayAns: boolean = isToday(yesterday);

        expect(isTodayAns).toStrictEqual(false);
    });
})
