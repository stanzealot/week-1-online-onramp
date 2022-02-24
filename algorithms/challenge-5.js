function replaceDivisible(x, y) {
    let newArray = [];
    for(let i=0;i<=x.length-1;i++){
        if(x[i]%y === 0){
            x[i] = "isDivisible"
        }
    }
    return x;
}


module.exports = replaceDivisible
