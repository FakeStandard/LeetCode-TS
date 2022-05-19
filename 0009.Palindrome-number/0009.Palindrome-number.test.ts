import { isPalindrome } from './0009.Palindrome-number'

describe("test isPalindrome function", () => {
    it("return true", () => {
        expect(isPalindrome(121)).toBe(true)
    })

    it("return false", () => {
        expect(isPalindrome(-121)).toBe(false)
    })

    it("return false", () => {
        expect(isPalindrome(10)).toBe(false)
    })

    it("return false", () => {
        expect(isPalindrome(-101)).toBe(false)
    })
})