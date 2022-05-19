import { fib } from './0509.Fibonacci-number'

describe("test fib function", () => {
    it("return 1", () => {
        expect(fib(2)).toBe(1)
    })

    it("return 2", () => {
        expect(fib(3)).toBe(2)
    })

    it("return 3", () => {
        expect(fib(4)).toBe(3)
    })

})