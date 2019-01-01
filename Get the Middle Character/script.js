function getMiddle(s){
    let arr = s.split("");
    if(arr.length % 2 === 0){
        return arr[Math.floor((arr.length-1)/2)]+arr[(Math.floor((arr.length-1)/2)+1)];
    } else if(arr.length % 2 === 1){
        return  arr[(arr.length-1)/2];
    }
}