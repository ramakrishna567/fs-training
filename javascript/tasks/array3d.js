var nameStudents = ["ram", "krishna", "sai", "vijay"];
var classStudents = ["5th", "10th", "8th", "9th"];
var ageStudents = [10, 15, 13, 14];

// var array2 = [nameStudents, "3456"]; //it is 2-Dimensional Array
// for (var index = 0; index < array2.length; index++) {
//   for (let index2 = 0; index2 < array2[index].length; index2++) {
//     console.log(array2[index][index2]);

//   }
//   console.log(array2[index]);
//   }


// it is also for 2-Dimensional Array
// var array2_D = [nameStudents, classStudents];
// for (var index = 0; index < array2_D.length; index++) {
//   for (let index2 = 0; index2 < array2_D[index].length; index2++) {
//     console.log(array2_D[index][index2]);
//   }
//   // console.log(array2[index]);
// }


// // it is also for 3-Dimensional Array
// var arry3_D = [array2[nameStudents]]
// for (var index = 0; index < array3.length; index++) {
//   for (let index2 = 0; index2 < array3[index].length; index2++) {

//     console.log(array3[index][index2]);

//   }
//   // console.log(array2[index]);
// }

for (index=0; index<nameStudents.length; index++){
      console.log(nameStudents[index]);
      for (innerIndex=0; innerIndex<nameStudents[index].length; innerIndex++){
        console.log(nameStudents[index][innerIndex])
        for (innerIndexIndex=0; innerIndexIndex<nameStudents[index][innerIndex].length; innerIndexIndex++){
          console.log(nameStudents[index][innerIndex][innerIndexIndex])
        }

      }
}