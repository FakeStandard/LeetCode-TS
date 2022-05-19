/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let l = 0, r = s.length - 1
    let tmp: string = "";

    while (l < r) {
        // swap
        tmp = s[l]
        s[l] = s[r]
        s[r] = tmp

        l++, r--
    }
};