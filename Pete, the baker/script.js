function cakes(recipe, available) {
    let recipe2 = Object.keys(recipe);
    let available2 = Object.keys(available);
    if(available2.length < recipe2.length){
        return 0;
    } else{
        let k = 0;
        let counter = 0;
        for(i=0;i<available2.length;i++){
            if(recipe2[k] === available2[i]){
                counter++;
                k++
                i=-1;
            }
        }
        k = 0;
        let arr = [];
        if(counter === recipe2.length){
            for(i=0;i<available2.length;i++){
                if(recipe2[k] === available2[i]){
                    let result = Math.floor(available[available2[i]]/recipe[recipe2[k]]);
                    k++;
                    i=-1;
                    arr.push(result);
                }
            }
        }
        if(arr.length === 0){
            return 0;
        }
        console.log(arr);
        let min = arr[0];
        for(i=1;i<arr.length;i++){
            if(arr[i]<min){
                min = arr[i];
            }
        }
        return min;
    }
}