async function sumFirstNNumbersAsync(n) {
    if (n <= 0) {
        throw new Error("n should be a positive integer");
    } else {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
}

(async () => {
    try {
        const result = await sumFirstNNumbersAsync(4);
        console.log("Sum using async/await: " + result);
    } catch (error) {
        console.log(error);
    }
})();
