let iter = 0;

let maxN = -1;
let maxIter = -1;

const applyRule = (n) => {
    iter++;

    if (n <= 1) return n;

    return applyRule(n % 2 === 0 ? n / 2 : 3 * n + 1);
}

for (let n = 1; n < 1_000_000 + 1; n++) {

    applyRule(n);

    if (iter > maxIter) {
        maxIter = iter;
        maxN = n;
    }
  
    iter = 0;
}

console.log("maximum n: ", maxN);
console.log("maximum iteration: ", maxIter); 