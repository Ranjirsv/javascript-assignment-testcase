//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

/*eslint-env node, node*/
module.exports = function(out){
var date=new Date();
var m=date.getMonth();
var d=date.getDate();
var y=date.getFullYear();
  out(m+"/"+d+"/"+y);
};
