// 3d scan - one for loop - no if - then.

let A = [
        [
   ["a", 55, 146],
   ["b", 34, 124],
   ["c", 96, 564],
   [100, 12, "d"],
        ],
        [
   ["e", 88, 146],
   ["f", 34, 124],
   ["g", 96, 564],
   [100, 12, "h"],
        ],
        [
   ["i", 88, 146],
   ["j", 34, 124],
   ["k", 96, 564],
   [100, 12, "k"],
        ],
        [
   ["m", 88, 146],
   ["n", 34, 124],
   ["o", 96, 564],
   [100, 12, "p"],
        ],
        [
   ["q", 88, 146],
   ["r", 34, 124],
   ["s", 96, 564],
   [100, 12, "t"],
        ]
        ];

let t = "";

let s = A.length;       // 5 matrices
let m = A[0].length;    // 4 rows
let n = A[0][0].length; // 3 columns

let i = 0;
let j = 0;
let d = 0;
let k = 0;

let q = n * m * s;

for (let v = 0; v < q; v++){
    
   k = v % (m*n);
   
   j = v % n;
   i = (k-j) / n;
   d = (v-k) / (m*n);
   
   t += v + " A["+d+"]["+i+"]["+j+"]=";
   t += A[d][i][j] + "\n";
}

print(t);


// Ex. (94) – 3D traversal with one for-loop using only arithmetic operators.

// References
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Python, Springer, 2024, pp. 1-245.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in MATLAB, Springer, 2024, pp. 1-255.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Javascript, Springer, 2024, pp. 1-240.
