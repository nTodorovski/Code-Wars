function friend(friends){
    let output = [];
    for(i=0;i<friends.length;i++){
        if(friends[i].length === 4){
            output.push(friends[i]);
        }
    }
    return output;
  }