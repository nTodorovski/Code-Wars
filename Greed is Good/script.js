function score(dice){
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    let sum = 0;
    for(i=0;i<dice.length;i++){
        if(dice[i] === 1){
            counter1++;
        }
        if(dice[i] === 2){
            counter2++;
        }
        if(dice[i] === 3){
            counter3++;
        }
        if(dice[i] === 4){
            counter4++;
        }
        if(dice[i] === 5){
            counter5++;
        }
        if(dice[i] === 6){
            counter6++;
        }
    }
    let k = 0;
    let arr = [counter1,counter2,counter3,counter4,counter5,counter6];

    if(arr[k] === 5){
        sum = sum + 1200;
    } else if(arr[k] === 4){
        sum = sum + 1100;
    } else if(arr[k] === 3){
        sum = sum + 1000;
    } else if(arr[k] === 2){
        sum = sum + 200;
    } else if(arr[k] === 1){
        sum = sum + 100;
    }
    k++;
    if(arr[k] === 3){
        sum = sum + 200;
    }
    k++;
    if(arr[k] === 3){
        sum = sum + 300;
    }
    k++;
    if(arr[k] === 3){
        sum = sum + 400;
    }
    k++;
    if(arr[k] === 5){
        sum = sum + 600;
    } else if(arr[k] === 4){
        sum = sum + 550;
    } else if(arr[k] === 3){
        sum = sum + 500;
    } else if(arr[k] === 2){
        sum = sum + 100;
    } else if(arr[k] === 1){
        sum = sum + 50;
    }
    k++;
    if(arr[k] === 3){
        sum = sum + 600;
    }
    return sum;
}