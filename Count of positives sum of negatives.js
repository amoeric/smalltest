// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript
// Count of positives / sum of negatives
// 给定一个整数数组。
// 返回一个数组，其中第一个元素是正数的数量，第二个元素是负数的总和。
// 如果输入数组为空或null，则返回一个空数组。

function countPositivesSumNegatives(arr){  
  
    var box=[]; var count = 0;  var negative = 0;
    var empty = []
    
    if(Array.isArray(arr) == true && arr.length!=0){//先判斷是否為空
       for(i = 0; i<arr.length; i++){
      
        if(arr[i] < 0){//負數的話
          negative += arr[i];
          continue;
        }else{
          count++;//正數的次數
          continue;
        }
      }
      box.push(count,negative);
    }
    else{
      return empty
    }
    
    return box;
  }
  