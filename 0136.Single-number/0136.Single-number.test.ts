
import { singleNumber } from './0136.Single-number'

describe("test singleNumber function", () => {
    it("return 1", () => {
        expect(singleNumber([2, 2, 1])).toBe(1)
    })

    it("return 4", () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
    })

    it("return 1", () => {
        expect(singleNumber([1])).toBe(1)
    })
})