function greaterY(arr,Y) {
  
  let count = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] > Y){
      count++;
    }
    
  }
  return count;
  
}
