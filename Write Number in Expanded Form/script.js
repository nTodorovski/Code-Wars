function expandedForm(num){
    let nuli = ["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000"];
    let str = "";
    let counter = 0;
    while(num>0){
        let broj = num % 10;
        while(broj === 0){
            num = Math.floor(num/10);
            broj = num % 10;
            counter++;
        }
        if(counter === 0){
            str = broj + nuli[counter];
        } else{
            str = broj + nuli[counter] + " " + "+" + " " + str;
        }
        num = Math.floor(num/10);
        counter++;
    }
    str = str.toString();
    console.log(str);
    let arr = str.split("");
    console.log(arr);
    if(arr[arr.length-1] === " "){
        arr.splice(arr.length-3,3);
        str = arr.join("");
    }
    return str;
}