function highestSum(x, y) {
    let maxSum;
    let sumX = 0; let sumY = 0;
    for(let i=0;i<=x.length-1;i++){
        sumX = sumX+x[i];
        sumY = sumY+y[i];      

    }
    sumX > sumY ?  maxSum =sumX : maxSum = sumY
    return maxSum;
}


module.exports = highestSum