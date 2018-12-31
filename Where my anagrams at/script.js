function anagrams(word, words) {
    let counter = word.length;
    let original = word;
    let arr = [];
    let flag = 0;
    for(i=0;i<words.length;i++){
        let zbor = words[i];
        if(word.length<words[i].length){
            continue;
        }else{
            for(j=0;j<words[i].length;j++){
                if(word[0] === words[i][j]){
                    counter--;
                    words[i] = words[i].replace(word[0],"");
                    word = word.substring(1,word.length);
                    j=-1;
                }
            }
            if(counter === 0 || flag === 1){
                arr.push(zbor);
                counter = original.length;
                word = original;
            }else{
                counter = original.length;
                word = original;
            }
        }
    }
    return arr;
}