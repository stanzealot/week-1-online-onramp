function noOfElements(x, y, z) {
    count = 0;
    x.forEach(element => {
        if(element >= y && element <= z){
            count++
        }
    });
    return count;
}


//console.log(noOfElements([4,6,2,6,7,7], 0, 7));


module.exports = noOfElements
