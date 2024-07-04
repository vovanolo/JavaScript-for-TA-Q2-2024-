const { add } = require('./logic');


describe("Test adding function", () => {
    test("Test 2 + 2 must = 4", () => {
        expect(add(2,2)).toBe(4);
    })
})