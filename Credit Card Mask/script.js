function maskify(cc) {
    let cc2 = "";
    if(cc.length>4){
      let cc1 = cc.substring(cc.length-4,cc.length);
      for(i=0;i<cc.length-4;i++){
        cc2 = cc2+"#";
      }
      return cc2+cc1;
    }else{
      return cc;
    }
  }