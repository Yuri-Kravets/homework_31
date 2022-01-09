function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

console.log(flatten([[1, 2, 3], [4, 5]])); 
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); 



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
