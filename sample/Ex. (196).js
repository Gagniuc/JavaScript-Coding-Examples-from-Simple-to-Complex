let a = [6, 8, 10];
let b = [12, 10, 20];

print(p(a,b));

function p(a,b){

    let n = a.length;
    let m = [];
    m[0] = 0;
    m[1] = 0;
    
    for(let i=0; i<n; i++){
        m[0] += a[i];
        m[1] += b[i];
    }

    m[0] = m[0] / n; // mean a
    m[1] = m[1] / n; // mean b

    let s0 = 0;
    let s1 = 0;
    let s2 = 0;
    
    for(let i=0; i<n; i++){
        s0 += (a[i]-m[0])*(b[i]-m[1]);
        s1 += Math.pow(a[i]-m[0], 2);
        s2 += Math.pow(b[i]-m[1], 2);
    }

    r = s0 / Math.sqrt(s1 * s2);

    return r;
}

// Ex. (196) - Pearson correlation coefficient.

// References

// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Python, Springer, 2024, pp. 1-245.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in MATLAB, Springer, 2024, pp. 1-255.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Javascript, Springer, 2024, pp. 1-240.
