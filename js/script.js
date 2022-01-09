function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

console.log(flatten([[1, 2, 3], [4, 5]])); 
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); 


////////////////////////////
const selfFlat = function (depth = 1) {
    let arr = Array.prototype.slice.call(this)
    if (depth === 0) return arr
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return [...pre, ...selfFlat.call(cur, depth - 1)]
        } else {
            return [...pre, cur]
        }
    }, [])
}

Array.prototype.selfFlat = selfFlat;
console.log(selfFlat([[[1, [1.1]], 2, 3], [4, 5]]));

/////////////////////////////////
const flatten = (nested) => {
    const flat = [];
    const handleFlat = (array) => {
      let counter = 0
      while (counter < array.length) {
        const val = array[counter];
        if (Array.isArray(val)) {
            handleFlat(val);
        } else {
            flat.push(val)
        }
        counter++;
    }
    }
    handleFlat(nested);
    return flat;
}
  console.log(flatten(a)); // [1, 2, 3, 4, 5, 6, 7];
  ///////////////////////////

const arr = [1, 2, [3, 4, [5, 6]]];
// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};
flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]


///////////////////////////

var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

////////////////////

let arr = [
    [1, 2],
    [3, 4],
    [5, 6][7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];

let flatArray = [].concat.apply([], arr);
console.log(flatArray);

//////////////////////////
const flatten = function(arr, result = []) {
    for (let i = 0, length = arr.length; i < length; i++) {
      const value = arr[i];
      if (Array.isArray(value)) {
        flatten(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  };
console.log(flatten([1, [1], [[1]]]));
  