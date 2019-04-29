// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(x){
    var sum = 1;
    var count = 4;
    for(i=1;i<x;i++){
      
      if(x==1) {
        return 1;      
      }
      else{
       sum += 1/count;
       count+=3;
      }
    }
    if(x==0){return x.toFixed(2);}
    else{return sum.toFixed(2);}
  }