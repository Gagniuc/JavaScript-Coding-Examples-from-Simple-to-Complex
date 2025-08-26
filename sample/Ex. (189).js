let a = [];
let b = [3, 6, 2, 78, 99, 1, 4];

let r = 0;
let n = b.length;
    
for (let i=0; i<n; i++) {
    a[b[i]] = b[i];
}
    
let m = a.length; // max val
    
for (let j=0; j<m; j++) {
    if(a[j]){b[r] = a[j]; r++}
}

print(b);

// 10.5.1 Ex. (189) - Low level native sort and eliminate duplicates (I).

// References

// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Python, Springer, 2024, pp. 1-245.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in MATLAB, Springer, 2024, pp. 1-255.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Javascript, Springer, 2024, pp. 1-240.
