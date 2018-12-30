function DNAStrand(dna){
    let arr = dna.split("");
    for(i=0;i<arr.length;i++){
        if(arr[i] === "T"){
            arr[i] = "A";
        }else if(arr[i] === "A"){
            arr[i] = "T";
        }else if(arr[i] === "C"){
            arr[i] = "G";
        }else if(arr[i] === "G"){
            arr[i] = "C";
        }
    }
    let arr1 = arr.join("");
    return arr1;
}