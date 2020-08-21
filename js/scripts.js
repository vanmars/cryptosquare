/* CRYPTOSQUARE TASKS
1. Change string to lower case 
2. Remove all spaces and punctuation 
3. Count number of characters and save to a variable
4. Determine smallest square - smallest square that is larger = Math.ceil(Math.sqrt(num))
5. Create a function that returns an array of arrays, the same length of the column number
6. Create a function to push values of the string to each corresponding array!!!!
7. concat each array with previous, and turn this into a string
8. after every five leters, add a space
*/

// Business Logic
function getEmptyArrays (numOfColumns) {          // Create a function that returns an array of arrays, the same length of a given column number (task 5)
  let arrays = [];
  for (i = 0; i < numOfColumns; i++){
    arrays[i] = [];
  };
  return arrays
};

function fillEmptyArrays (numberOfCharacters, numberOfColumns, string, emptyArrays) {   // Create a function to push values of the string to each corresponding array (task 6)
  const highestIndex = numberOfCharacters / numberOfColumns;
  let counter = 0;
  for ( let i=0; i<=highestIndex; i++) {
    for (let arr of emptyArrays) {
      if (counter < numberOfCharacters){
        arr[i] = string[counter];
        counter ++
      } else {
        break;
      };
    };
  }; 
  return emptyArrays;
};

function encrypt (string) {
  const lowerCase = string.toLowerCase();                                                  // Change string to lower case (task 1)
  const lettersOnly = lowerCase.replace(/[\W\s/]/, "");                                   // Remove all white space and punctuation (task 2)
  const numOfChars = lettersOnly.length;                                                  // Count number of characters and save to a variable (task 3)
  const columns = Math.ceil(Math.sqrt(numOfChars));                                       // Find smallest square to get column length (task 4)
  const emptyArrays = getEmptyArrays(columns);                                            // Create an empty array for each column in teh cryptosquare (task 5)
  const filledArrays = fillEmptyArrays(numOfChars, columns, lettersOnly, emptyArrays);    // Push values of string to correct array (task 6)
  console.log(filledArrays);
  let singleArray = filledArrays[0];                                                                  // Concat all arrays into single array (task 7)
  for (i=1; i<filledArrays.length; i++){  
    singleArray.concat(filledArrays[i]);
  };
  console.log(singleArray);
  const newString = singleArray.join("");                                                 // Combine single array into a string (task 7)
  // after every fifth letter add a space
  let fiveLetters = /\w\w\w\w\w/;
  const encryptedArray = newString.split(fiveLetters);
  // console.log(encryptedArray);
  // const encryptedString = newString.replace(fiveLetters, (fiveLetters + " ")); 
  return newString
};





// Testing of 'encrypt' function
  // User Input: "Hello You"
  console.log("Test 1: " + (encrypt("Hello You") === "hloeo uly")); 
  console.log("Expected: hloeo uly");
  console.log("Returned: " + (encrypt("Hello You")));

// MATH NOTES
// isSquare if Math.sqrt(num) - Math.floor(Math.sqrt(num)) === 0
// Smallest square that is larger than a non-square num = Math.ceil(Math.sqrt(num))
// MATH SCRATCH WORK
// const sr81 = Math.sqrt(81);
// const roundsr81 = Math.ceil(sr81);
// const sr69 = Math.sqrt(69);
// const roundsr69 = Math.ceil(sr69);
// console.log(sr81);
// console.log(roundsr81);
// console.log(sr69);
// console.log(roundsr69);

// User Interface Logic