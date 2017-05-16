// 6. Write a function to find the difference of two arrays?

/*eslint-env node */

function difference(arr1,arr2) {

arr1 = arr1.toString().split(',').map(Number);
arr2 = arr2.toString().split(',').map(Number);
var temp=[];
for (var i in arr1) {
if(arr2.indexOf(arr1[i]) === -1) temp.push(arr1[i]);
}
for(i in arr2) {
if(arr1.indexOf(arr2[i]) === -1) temp.push(arr2[i]);
}
return temp;
}





