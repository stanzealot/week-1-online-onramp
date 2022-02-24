function divisible(a) {
    count = 0
    a.forEach(element => {
        if(element%2 === 0 && element > 15){
            count++
        }
    });
    return count;
}



module.exports = divisible
