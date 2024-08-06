const flattenArray = () => {
    let a = [1, [2, [3, 4],5],6, [7]];
    let b = a.flat(4)
    return b
}

console.log(flattenArray())