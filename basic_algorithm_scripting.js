// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size(second argument)
// and returns them as a two-dimensional array.





function chunkArrayInGroups(arr, size) {
  let answer = [];

  let i =0;
 while (i < arr.length) {
        answer.push(arr.slice(i, i+size));
        i += size;
      }
      return answer;
 }


 // Basic Algorithm Scripting: Mutations
 // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 //
 // For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
 //
 // The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".
 //
 // Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

 function mutation(arr) {
   let first = arr[0].toLowerCase();
   let second = arr[1].toLowerCase();

   for (let i=0; i < second.length; i++) {
     if (first.indexOf(second[i]) < 0)
       return false;
     }
     return true;
   }




 mutation(["hello", "hey"]);

 //
 // Basic Algorithm Scripting: Where do I Belong
 // Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
 //
 // For example, getIndexToIns([1,2,3,4], 1.5)should return 1because it is greater than 1(index 0), but less than 2(index 1).
 //
 // Likewise, getIndexToIns([20,3,5], 19)should return 2because once the array has been sorted it will look like [3,5,20]and 19is less than 20(index 2) and greater than 5(index 1).
 //


 function getIndexToIns(arr, num) {
   arr.sort(function(a, b) {
   return a - b;
   });
   let i = 0;
   while (num > arr[i]) {
   i++;
   }
 return i;
 }



 //
 // Basic Algorithm Scripting: Falsy Bouncer
 // Remove all falsy values from an array.
 //
 // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 //
 // Hint: Try converting each value to a Boolean.
 //


 function bouncer(arr) {
    return arr.filter(Boolean);
 }

 bouncer([7, "ate", "", false, 9]);


 //
 // Basic Algorithm Scripting: Slice and Splice
 // You are given two arrays and an index.
 //
 // Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.
 //
 // Begin inserting elements at index nof the second array.
 //
 // Return the resulting array. The input arrays should remain the same after the function runs.





 function frankenSplice(arr1, arr2, n) {
   // It's alive. It's alive!
   let answer = arr2.slice();



   for (let i=0; i <arr1.length; i++) {
     answer.splice(n,0,arr1[i]);
     n++;
   }

   return answer;
 }

 frankenSplice([1, 2, 3], [4, 5, 6], 1);
