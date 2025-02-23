function operationWithNum(num, op) {
    if (op === 'chop') {
        num /= 2;
    } else if (op === 'dice') {
        num = Math.sqrt(num);
    } else if (op === 'spice') {
        num += 1;
    } else if (op === 'bake') {
        num *= 3;
    } else if (op === 'fillet') {
        num *= 0.8;
    }

    return num;
}

function cookingByNumbers (num, op1, op2, op3, op4, op5) {
    opsArray = [op1, op2, op3, op4, op5];

    
    for (let i = 0; i < opsArray.length; i++) {
        num = operationWithNum(num, opsArray[i]);
        console.log(num)
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


// function cookingByNumbers (num, op1, op2, op3, op4, op5) {
//         opsArray = [op1, op2, op3, op4, op5];
        
//         for (let op of opsArray) {
//             if (op === 'chop') {
//                 num /= 2;
//             } else if (op === 'dice') {
//                 num = Math.sqrt(num);
//             } else if (op === 'spice') {
//                 num += 1;
//             } else if (op === 'bake') {
//                 num *= 3;
//             } else if (op === 'fillet') {
//                 num *= 0.8;
//             }
        
//             console.log(num)
//         }
//     }