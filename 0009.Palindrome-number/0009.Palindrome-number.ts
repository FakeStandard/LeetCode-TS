
export function isPalindrome(x: number): boolean {
    // 從左右兩邊開始進行比較
    if (x < 0 || (x != 0 && x % 10 == 0)) return false

    let s: string = x.toString()
    let l = 0, r = s.length - 1

    while (l < r) {
        if (s[l] !== s[r]) return false
        l++, r--
    }

    return true

    // or use /,%
    if (x < 0 || (x != 0 && x % 10 == 0)) return false

    let tmp = 0

    while (x > tmp) {
        tmp = Math.trunc(tmp * 10 + x % 10)
        x = Math.trunc(x / 10)
    }

    return tmp == x || x == Math.trunc(tmp / 10)
};
