var countPrimes = function (n) {
    let notPrimes = new Array(n);
    for (let i = 0; i < n; i++) {
        notPrimes[i] = false;
    }
    let res = 0;
    for (let i = 2; i < n; i++) {
        if (notPrimes[i] === false) {
            res++;
            for (let j = 2; i * j < n; j++) {
                notPrimes[i * j] = true;
            }
        }
    }
    return res;
};

let input = 1000;

console.log(`input n = ` + input);
console.log(`prime count = ` + countPrimes(input));