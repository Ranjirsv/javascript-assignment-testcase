/*globals tudentsGradeRatingArr */
/*eslint-env node */
//Q10. Write a program which accept average marks of the student achieved in exams and convert them into grade
// and display ratings of each student, grades and ratings can be calculated asper the following table:
/*
Range   	     Grade	Rating
>=0 and <= 60	  F	    Poor
>=61 and <= 70	D	    Fair
>=71 and <= 80	C	    Average
>=81 and <= 90	B	    Good
>=91 and <=100	A	    Excellent
*/

const studentDetails = [
  {name:'David',marks:80},
  {name:'Vinoth',marks:77},
  {name:'Divya',marks:88},
  {name:'Ishitha',marks:95},
  {name:'Thomas',marks:68}
];
let studentsGradeRatingArr = [];
for(var i in studentDetails){
    var mar=studentDetails[i].marks;
    if(mar>=0&&mar<=60){
        studentsGradeRatingArr.push({"name":studentDetails[i].name,"grade":'F', "rating":'Poor'});
       
    }
     if(mar>=61&&mar<=70){
        studentsGradeRatingArr.push({"name":studentDetails[i].name,"grade":'D', "rating":'Fair'});
    }
     if(mar>=71&&mar<=80){
        studentsGradeRatingArr.push({"name":studentDetails[i].name,"grade":'C', "rating":'Average'});
    }
     if(mar>=81&&mar<=90){
        studentsGradeRatingArr.push({"name":studentDetails[i].name,"grade":'B', "rating":'Good'});
    }
     if(mar>=91&&mar<=100){
        studentsGradeRatingArr.push({"name":studentDetails[i].name,"grade":'A', "rating":'Excellent'});
    }
}



//Write your code here
//


module.exports = studentsGradeRatingArr;
