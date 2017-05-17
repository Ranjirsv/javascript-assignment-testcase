/*eslint-env browser, node*/
//Q16. Flatten the following object :

const arr = [5, [22], [[14]], [[4]],[5,6]];
const temp = [];

function flatten(arrArg) {

//  var merged = [].concat.apply([], arrArg);
//  console.log(merged);
var len=arr.length;
for(var i=0;i<len;i++)
{
if(Array.isArray(arr[i])){
  var ln=arr[i].length;
  var a=arr[i];
  for(var j=0;j<ln;j++){
      var b=a[j];
      if(Array.isArray(a[j])){
          var l=a[j].length;
          var c=a[j];
          for(var k=0;k<l;k++){
              temp.push(c[k]);
          }
      }
      else{
          temp.push(a[j]);
      }
  }
}
else{
    temp.push(arr[i]);
}
}
return temp;
}

const newArr = flatten(arr);

module.exports = newArr;
