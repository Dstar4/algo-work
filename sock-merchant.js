'use strict';

// Complete the sockMerchant function below.
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


console.log(sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]))


