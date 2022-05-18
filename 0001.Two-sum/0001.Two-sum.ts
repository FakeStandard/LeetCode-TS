

export function twoSum(nums: number[], target: number): number[] {
    // Approach 1-暴力破解
    let res: number[] = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) return [i, j]
        }
    }

    return [-1, -1]

    // Approach 2-DP 解, Map<num ,index>
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]))
            return [map.get(nums[i]), i]

        map.set(target - nums[i], i)
    }

    return [-1, -1]
}