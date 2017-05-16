
//Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers
//For example if numbers is 12345648 the output should be 123456-4-8.
let nums = "12345648";
module.exports = function(nums,out){
var output="";
var len=nums.length;
for(var i=0;i<len;i++){
var a=parseInt(nums.charAt(i));
var b=parseInt(nums.charAt(i+1));
output+=a;
if((a%2==0)&&(b%2==0)){
output+="-";
}
}

    out(output);
  
}
