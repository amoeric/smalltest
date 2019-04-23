// Predict your age!
// 记下每个曾祖父母去世时的年龄清单。
// 将每个数字乘以其自身。
// 将它们全部加在一起。
// 取结果的平方根。
// 除以2。


function list(agelist){
  var agelistroot = agelist.map(function(x){return x*x});
  var agesum =0;
  for(i=0;i<agelistroot.length;i++){
    agesum += agelistroot[i];
  }
   
  return  Math.sqrt(agesum)/2;
}

console.log(list([1,3,2,5]));