/*eslint-env browser, node*/

// Q 15. Consider the following array of objects and solve the problem statements blow:-
// a) Display all objects with occupation as 'Programmer'
// b) Sort the object basis the age key in the descending order
// c) Recreate the above array of objects into the following object of objects :{ 'Developer' : [{'name':_____________, 'age':__________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
// d) Use the map function to create a new array of names present in myObj.
// Expected output:
// [ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]

var myObj =[{'name':'Arun', 'age': 30, 'occupation': "Developer"},
{'name':'Ashish', 'age': 32, 'occupation': "Developer"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'David', 'age': 27, 'occupation': "Programmer"},
{'name':'Priya', 'age': 22, 'occupation': "Programmer"},
{'name':'Venkat', 'age': 28, 'occupation': "Programmer"}];
var occupationArr=[];
var newObj;
var devArr=[];
var progArr=[];
var nameArr=[];
for(var i in myObj){
    if(myObj[i].occupation==="Programmer"){
        //occupationArr.push(myObj[i]);
    }
}
occupationArr.push("Developer");
occupationArr.push("Programmer");
myObj.sort(function(a,b){
    
   return b.age-a.age;
   
});
for(var j in myObj){
    if(myObj[j].occupation==="Developer"){
        devArr.push({"name":myObj[j].name,"age":myObj[j].age});
        
    }
    else{
        progArr.push({"name":myObj[j].name,"age":myObj[j].age});
    }
}
newObj={"Developer":devArr,"Programmer":progArr};
myObj.map(function(key){
    nameArr.push(key.name);
});
console.log(newObj);
module.exports = {
  c: occupationArr,
  d: newObj,
  e: nameArr
};

