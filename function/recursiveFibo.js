function fib(n, first = 1, second = 1) {
    if (n <= 2) return 1;
    [first, second] = [second, first + second];
    return (n - 2 === 1) ? second : fib(n - 1, first, second);
}

console.log(fib(10));