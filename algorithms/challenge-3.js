function isDivisbleByN(arr, n) {
    let newArray = [];
    arr.forEach(element => {
        if(element%n === 0){
            newArray.push(element);
        }
    });
    return newArray;
}


module.exports = isDivisbleByN
