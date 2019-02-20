// var out = [];
// var arr = [5, 8, 1, 6, 9, 15, 7];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             i = j;
//         }
//     }   
//     out.push(arr[i]);
//     arr.splice(arr[i], 1);
// }
// console.log(out);


function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  bubbleSort(numbers);
  console.log(numbers);