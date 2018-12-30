function highAndLow(numbers){
    let arr = numbers.split(" ");
    let min = arr[0];
    let max = arr[0];
    for(i=0;i<arr.length;i++){
        if(Number(arr[i])>max){
            max = Number(arr[i]);
        }
    }
    for(i=0;i<arr.length;i++){
        if(Number(arr[i])<min){
            min = Number(arr[i]);
        }
    }
    let arr1 = `${max} ${min}`;
    return arr1;
}