/*eslint-env node, node*/

function highestAndLowest(numbers){

var num=numbers.split(" ");
var newArray=[];
var len=num.length;
var i;
var arr=[];
for(i=0;i<len;i++){
var a=parseInt(num[i]);
arr.push(a);
}
arr.sort(function(a , b){return a-b});
newArray.push(arr[len-1]+"");
newArray.push(arr[0]+"");
return newArray;
}

module.exports=highestAndLowest;