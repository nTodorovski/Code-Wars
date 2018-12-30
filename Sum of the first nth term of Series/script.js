function SeriesSum(n){
    let arr = [];
    let counter = 1;
    let sum = 0;
    if(n === 0){
        return sum.toFixed(2);
    }
    for(i=0;i<n;i++){
        arr[i] = 1/counter;
        counter += 3;
        sum = sum + arr[i];
    }
    let result = sum.toFixed(2);
    return result;
}