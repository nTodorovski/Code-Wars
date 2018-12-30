function iqTest(numbers){
    let odd = 0;
    let even = 0;
    let arr = numbers.split(" ");
    for(i=0;i<arr.length;i++){
        if(Number(arr[i]) % 2 === 0){
            even++;
        } else if(Number(arr[i]) % 2 === 1){
            odd++;
        }
    }
    if(even>odd){
        for(i=0;i<arr.length;i++){
            if(arr[i] % 2 === 1){
                return i+1;
            }
        }
    } else if(odd>even){
        for(i=0;i<arr.length;i++){
            if(arr[i] % 2 === 0){
                return i+1;
            }
        }
    }
}