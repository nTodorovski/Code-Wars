function scramble(str1, str2){
    let k = 0;
    let counter = 0;
    for(i=0;i<str1.length;i++){
        if(str2[k] === str1[i]){
            counter++;
            str1 = str1.substring(0, i) + '' + str1.substring(i+1);
            k++;
            i = -1;
        }
        if(i === (str1.length-1) && k !== counter){
            return false;
        }
    }
    if(counter === str2.length){
        return true;
    } else{
        return false;
    }
}