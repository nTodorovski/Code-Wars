function generateHashtag(str){
    let str1 = str.split("");
    let counter = 0;
    let counter1 = 0;
    for(i=0;i<str1.length;i++){
        if(str1[i] !== " "){
            counter++;
        }else if(str[i] === " "){
            counter1++;
        }
    }
    if(counter1 === str1.length){
        return false;
    }
    if(counter>139){
        return false;
    } else{
        console.log(str1);
        for(i=0;i<str1.length;i++){
            if(str1[i] === " "){
                str1[i] = "";
            }
        }
        for(i=0;i<str1.length;i++){
            if(str1[i] === "" && str1[i+1] === ""){
                str1.splice(i+1,1);
                if(i === 0){
                    i = -1;
                } else{
                    i--;
                }
            }
        }
        for(i=0;i<str1.length;i++){
            if(str1[0] !== ""){
                str1[0] = str1[0].toUpperCase();
            }
            if(str1[i] === ""){
                if(i !== (str1.length-1)){
                    str1[i+1] = str1[i+1].toUpperCase();
                } else if(i === (str1.length-1)){
                    str1.splice(i,1);
                }
            }
        }
        let str2 = `#${str1.join("")}`;
        return str2;
    }
}