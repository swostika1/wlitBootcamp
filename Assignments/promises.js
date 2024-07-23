function sumFirstNNumbersPromise(n) {
    return new Promise((resolve, reject) => {
        if (n <= 0) {
            reject("n should be a positive integer");
        } else {
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            resolve(sum);
        }
    });
}

sumFirstNNumbersPromise(4)
    .then((result) => {
        console.log("Sum using promise: " + result);
    })
    .catch((error) => {
        console.log(error);
    });
