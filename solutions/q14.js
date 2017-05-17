/*eslint-env browser */
//Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?
var str="";
for(var i = 0; i <= 6; i++) 
{
str="";
	for(var x = 0; x <= i; x++)
	{
	    str+="* ";
		
	}
	console.log(str);
	
}