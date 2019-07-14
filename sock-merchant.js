'use strict';

// Complete the sockMerchant function below.
// function sockMerchant(n, ar) {
//     // console.log(n)
//     // console.log(ar)
//     const pairs = {}
//     let output = 0
//     for (let i = 0; i < n; i++) {
//         if (pairs[ ar[ i ] ]) {
//             pairs[ ar[ i ] ] += 1
//         } else {
//             pairs[ ar[ i ] ] = 1
//         }
//         // console.log(pairs[ ar[ i ] ])
//         if (pairs[ ar[ i ] ]) {
//             output++
//             // console.log(ar[ i ])
//         }

//         // console.log(pairs[ ar[ i ] ])

//     }
//     console.log(pairs)
//     console.log(output)
//     return output
// }
// Hash Solution BETTER
function sockMerchant(n, arr) {
    let pairs = 0;
    const colors = arr.reduce((acc, val) => {
        (!!acc[ val ]) ? acc[ val ] += 1 : acc[ val ] = 1;
        return acc;
    }, {});
    // console.log(colors)

    Object.keys(colors).forEach(n => {
        let _pair = parseInt(colors[ n ] / 2);
        if (_pair >= 1) pairs += _pair;
        // console.log(_pair)
        // console.log(pairs)
    });

    return pairs;
}

console.log(sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]))



// // Solution
// function sockMerchant(n, arr) {
//     let sorted = arr.sort((a, b) => a - b);
//     let pairs = 0;
//     console.log(sorted)

//     for (let i = 0; i < n - 1; i++) {
//         if (sorted[ i ] === sorted[ i + 1 ]) {
//             pairs++;
//             i += 1;
//         }
//         console.log(pairs)
//     }

//     return pairs;
// }


// console.log(sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]))

