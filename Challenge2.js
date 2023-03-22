const majority = (arr,n) => {
  let arr2 = [...new Set(arr)]
  let count=0;
  let finalCount=0;
  let element=null;
  for (let i = 0; i < arr2.length; i++){
      count = arr.filter(item => item === arr2[i]).length;
      
      if(count > finalCount){
        finalCount =count;
        element=arr2[i]
      }
  }

  if(finalCount > n/2){
    return element
  }
 
}


const arr = [2,2,1,1,1,2,2];
let n = arr.length;

console.log(majority(arr, n));
