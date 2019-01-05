function dirReduc(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] === "NORTH"){
            for(j=0;j<arr.length;j++){
                if(arr[j] === "SOUTH"){
                    arr[i] = "";
                    arr[j] = "";
                    break;
                }
            }
        }
        if(arr[i] === "SOUTH"){
            for(j=0;j<arr.length;j++){
                if(arr[j] === "NORTH"){
                    arr[i] = "";
                    arr[j] = "";
                    break;
                }
            }
        }
        if(arr[i] === "WEST"){
            for(j=0;j<arr.length;j++){
                if(arr[j] === "EAST"){
                    arr[i] = "";
                    arr[j] = "";
                    break;
                }
            }
        }
        if(arr[i] === "EAST"){
            for(j=0;j<arr.length;j++){
                if(arr[j] === "WEST"){
                    arr[i] = "";
                    arr[j] = "";
                    break;
                }
            }
        }
        console.log(arr);
    }

    for(i=0;i<arr.length;i++){
        if(arr[i] === ""){
            arr.splice(i,1);
            i=-1;
        }
    }
    return arr;
}