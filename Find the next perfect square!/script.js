function findNextSquare(sq) {
    for(i=0;i<sq;i++){
      if(i*i === sq){
      return (i+1)*(i+1);
      }
    }
    return -1;
  }