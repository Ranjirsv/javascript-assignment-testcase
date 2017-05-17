// 6. Write a function to find the difference of two arrays?

/*eslint-env node */




function difference(arr1,arr2) {


 var newArr = [];

  arr1.forEach(function(val){
   if(arr2.indexOf(val) < 0) newArr.push(val);
  });

  arr2.forEach(function(val){
   if(arr1.indexOf(val) < 0) newArr.push(val);
  });
console.log(newArr);
  return newArr;
}


module.exports=difference;


