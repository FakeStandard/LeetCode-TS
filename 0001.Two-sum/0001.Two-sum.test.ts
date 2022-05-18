import { twoSum } from './0001.Two-sum'

// Test 1
() => { expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]) }

describe("test twoSum function", () => {
    it("return [0 ,1]", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
    })

    it("return [1 ,2]", () => {
        expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
    })

    it("return [0 ,1]", () => {
        expect(twoSum([3, 3], 6)).toStrictEqual([0, 1])
    })

    it("return [0 ,0]", () => {
        expect(twoSum([1, 2, 3, 4, 5], 10)).toStrictEqual([-1, -1])
    })
})