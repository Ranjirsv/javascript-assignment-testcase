//Q13. Write a program to list (Fibonacci) series till a given number?

/*globals fibonacci:true */
/*eslint-env node */

fibonacci = function(numMax, done){
var a=0;
var b=1;
var num;
var rmdub;
var arr=[];
arr.push(a);
arr.push(b);
for(var i=0;i<numMax;i++){
    num=a+b;
    
    arr.push(num);
    a=b;
    b=num;
}
console.log(arr);
console.log(typeof arr);
return arr;
}
module.exports = fibonacci;
