let r = "u";

let c = [
    [ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ],
    [ 1, 2, 1, 0, 1, 3, 1, 0, 1, 1 ],
    [ 1, 1, 2, 0, 1, 3, 0, 1, 0, 1 ],
    [ 0, 1, 0, 2, 1, 3, 1, 0, 0, 1 ],
    [ 1, 1, 1, 0, 2, 3, 1, 0, 1, 0 ],
    [ 1, 0, 1, 1, 1, 3, 0, r, 0, 0 ],
    [ 1, 0, 3, 3, 3, 3, r, 0, 0, 1 ],
    [ 1, 0, 1, 1, 1, r, 0, 9, 9, 9 ],
    [ 1, 1, 0, 0, 0, 0, 1, 9, 0, 9 ]
];

let b = matrix_alphabet(c);
let t = decompose(c, b);

for(let k=0; k<b.length; k++){
    print(SMC(t, k));
}

print(b);

function decompose(c, a){
    let n = c.length;
    let m = c[0].length;
    d = [];

    for(let i=0; i<n; i++){
        
        d[i] = [];
        for(let j=0; j<m; j++){
        
            d[i][j] = [];
            for(let k=0; k<=a.length; k++){
                
                d[i][j][k] = " "; // "\u2591"
                
                if (c[i][j] === a[k]) {
                    d[i][j][k] = c[i][j];
                }
            }
        }
    }
    return d;
}

function matrix_alphabet(t){
    let a = [];
    let n = t.length;
    let m = t[0].length;

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
        
            var q = 1;
            for(let k=0; k<=a.length; k++){
                if (t[i][j] === a[k]) {q = 0;}
            }
            if (q === 1) {a.push(t[i][j]);}
        }
    }
    return a;
}

function SMC(m, k) {
    let r = 'M' + (k+1); 
    r += '\n ----------\n';
    for(let i=0; i<m.length; i++) {
        r += "|";
        for(let j=0; j<m[i].length; j++) {
            r += m[i][j][k];
        }
        r += "|\n";
    }
    r += ' ----------';
    return r;
}

// Ex. (210) - Decompose a matrix into multiple matrices based on unique values.

// References

// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Python, Springer, 2024, pp. 1-245.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in MATLAB, Springer, 2024, pp. 1-255.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Javascript, Springer, 2024, pp. 1-240.