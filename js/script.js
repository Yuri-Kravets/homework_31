function flatten(arr) {
  if (arguments.length === 2) throw new Error('Function accepts only 1 argument, too much arguments provided');
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

console.log(flatten([[1, 2, 3], [4, 5]])); 
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); 

