function contains(array, item) {
    // returns true if the array contains the item
    // returns false otherwise

    // return array.indexOf(item) >= 0;
    return array.includes(item);
}

function add(array, item) {
    // adds the item to the array, if it is not yet included
    // does nothing, otherwise

    if (!contains(array, item)) {
        array.push(item);
        // array[array.length] = item;
        // array.unshift(item);
    }
}

function remove(array, item) {
    // removes the item from the array, if it is included
    // does nothing, otherwise

    if (contains(array, item)) {
        array.splice(array.indexOf(item), 1);
    }
}

function sum(array) {
    // returns the sum of all elements

    // return array.reduce((prev, curr) => {
    //     console.log('prev/curr', prev, '/', curr);
    //     return prev + curr;
    // });

    return array.reduce((prev, curr) => prev + curr);

    // let total = 0;
    // for(let item of array) {
    //     total += item;
    // }
    // return total;
}

let lijstje = [4, 8, 15, 16, 23, 42];

console.log('contains = true', contains(lijstje, 4));
console.log('contains = false', contains(lijstje, 4874));

add(lijstje, 30);
console.log('lijstje met nieuw item', lijstje);
add(lijstje, 4);
console.log('lijstje zonder dubbele items', lijstje);

remove(lijstje, 16);
console.log('lijstje zonder 16', lijstje);
remove(lijstje, 'iets wat niet bestaat');
console.log('lijstje zelfde als net', lijstje);

console.log('sum 122', sum(lijstje));
