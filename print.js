

function printAllKLengthRec(set, prefix, n, k) {
    if (k == 0) {
        return;
    }
    for (let i = 0; i < n; ++i) {
        let newPrefix = prefix + set[i];
        printAllKLengthRec(set, newPrefix,
            n, k - 1);
    }
}

function printAllKLength(set, k) {
    let n = set.length;
    printAllKLengthRec(set, "", n, k);
}


let set = ['a', 'b'];
let k = 3;
let printt = printAllKLength(set, k);

console.log(printt);