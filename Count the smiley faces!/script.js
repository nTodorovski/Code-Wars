function countSmileys(arr) {
    let counter = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i] === ":)" || arr[i] === ":D" || arr[i] === ";D" || arr[i] === ":~)" || arr[i] === ";-D" 
        || arr[i] === ":-)" || arr[i] === ";~)" || arr[i] === ":-D" || arr[i] === ";)" || arr[i] === ":~)" 
        || arr[i] === ":~D" || arr[i] === ";~D" || arr[i] === ";-)"){
            counter++;
        }
    }
    return counter;
}