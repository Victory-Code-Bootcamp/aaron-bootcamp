function findMultiples(integer, limit) {
    let result = [];
    
    for (let i = integer; i <= limit; i += integer) {
        result.push(i);
    }
    
    return result;
}

console.log(findMultiples(3, 15)); 
console.log(findMultiples(5, 20)); 
console.log(findMultiples(4, 50)); 
