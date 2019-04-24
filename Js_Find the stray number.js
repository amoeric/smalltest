function stray(array){
    var AtoSort = array.sort();
    console.log("AtoSort===="+AtoSort);
    
    if((AtoSort[0]*2)==(AtoSort[0]+AtoSort[1])){
      
      return AtoSort[AtoSort.length-1];
    
    }else{
     
      return AtoSort[0];
    }
    
  }