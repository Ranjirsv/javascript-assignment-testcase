//Q13. Write a program to list (Fibonacci) series till a given number?

/*globals fibonacci:true */
/*eslint-env node */
fibonacci = function(numMax, done){
var a=0;
var b=1;
var num;
var arr=[];
arr.push(a);
arr.push(b);
for(var i=2;i<10;i++){
    num=a+b;
    arr.push(num);
    a=b;
    b=num;
}
return arr;
}
module.exports = fibonacci;
