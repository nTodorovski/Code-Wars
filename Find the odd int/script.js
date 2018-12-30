function findOdd(A) {
    let counter = 0;
    for(i=0;i<A.length;i++){
        for(j=0;j<A.length;j++){
            if(A[i] === A[j]){
                counter++;
            }
        }
        if(counter % 2 === 1){
            return A[i];
        } else{
            counter = 0;
        }
    }
}