function order(words){
    let arr = words.split(" ");
    let arr1 = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(arr[i][j] === '1'){
                arr1[0] = arr[i];
            } else if(arr[i][j] === '2'){
                arr1[1] = arr[i];
            } else if(arr[i][j] === '3'){
                arr1[2] = arr[i];
            } else if(arr[i][j] === '4'){
                arr1[3] = arr[i];
            } else if(arr[i][j] === '5'){
                arr1[4] = arr[i];
            } else if(arr[i][j] === '6'){
                arr1[5] = arr[i];
            } else if(arr[i][j] === '7'){
                arr1[6] = arr[i];
            } else if(arr[i][j] === '8'){
                arr1[7] = arr[i];
            } else if(arr[i][j] === '9'){
                arr1[8] = arr[i];
            } else{
                continue;
            }
        }
    }
    return arr1.join(" ");
}