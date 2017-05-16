/*eslint-env browser */
// Q11. Write a function that can accept a string and return the same after arranging it into alphabetical order.
/* Example String: 'webmaster'
Expected Output: 'abeemrstw
*/

var str='webmaster';
var newstr="";
var length=str.length;
var arr=[];
for(var i=0;i<length;i++)
{
    arr.push(str.charAt(i));
}
arr.sort();
for(var j=0;j<length;j++){
    newstr+=arr[j];
}
console.log(newstr);
