
export function fib(n: number): number {
    // Recursive - it's a clever approach, but the performance is not very good.
    if (n < 2) return n

    return fib(n - 1) + fib(n - 2)

    // Iterative - it's faster and uses less memory than recursive approach.
    if (n < 2) return n

    let fib1 = 0, fib2 = 1, tmp = 0

    for (let i = 2; i <= n; i++) {
        tmp = fib1
        fib1 = fib2
        fib2 = tmp + fib1
    }

    return fib2
};