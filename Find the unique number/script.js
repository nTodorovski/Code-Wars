function findUniq(arr){
    let flag = 0;
    let num = arr[0];
    let counter = 0;
    for(i=1;i<arr.length;i++){
        if(num !== arr[i]){
            flag = arr[i];
            counter++;
        }
    }
    if(counter === arr.length-1){
        flag = num;
    }
    return flag;
}