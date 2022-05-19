
export function singleNumber(nums: number[]): number {
    const set = new Set<number>();

    nums.forEach(num => {
        if (set.has(num)) set.delete(num)
        else set.add(num)
    })

    return [...set][0]
    // or
    // return set.values().next().value

    // use XOR
    let res = 0
    nums.forEach(num => {
        res ^= num
    })

    return res
};