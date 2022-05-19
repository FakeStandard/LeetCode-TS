
export function repeatedNTimes(nums: number[]): number {
    let set = new Set<number>();

    for (let num of nums) {
        if (set.has(num)) return num

        set.add(num)
    }

    return -1
};