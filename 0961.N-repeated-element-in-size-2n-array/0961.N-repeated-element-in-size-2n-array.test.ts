import { repeatedNTimes } from './0961.N-repeated-element-in-size-2n-array'

describe("test repeatedNTimes function", () => {
    it("return 3", () => {
        expect(repeatedNTimes([1, 2, 3, 3])).toBe(3)
    })

    it("return 2", () => {
        expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toBe(2)
    })

    it("return 5", () => {
        expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5)
    })
})