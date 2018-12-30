let number = function(busStops){
    let sum = 0;
    for(i=0;i<busStops.length;i++){
        sum = sum+busStops[i][0]-busStops[i][1];
        if(sum<0){
            sum = 0;
        }
    }
    return sum;
}