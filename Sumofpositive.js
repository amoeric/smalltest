
// Sum of positive
// https://www.codewars.com/kata/sum-of-positive/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
arr1 = [-1,2,3,4,-5];

// 第一版
// function a(arr){
//   var r = /^-[0-9]*[1-9][0-9]*$/;
//   var count = 0;
//   for(i=0;i<arr.length;i++){
    
//     if(r.test(arr[i])==true){
//       continue;
//     }else{
//       count += arr[i];
//       console.log(count+"count=");
//       continue;
//     }
//   }
//   return count;
// }
// console.log(a(arr1));


// 加上filter更新版
function positiveSum(arr) {
    var arrfilter = arr.filter(function(value) { return value > 0;});
    if(arrfilter.length!=0){
        var arrcount = arrfilter.reduce(function(x,y){return x+y});
        return arrcount;
    }else{
      return 0;
    }
  }