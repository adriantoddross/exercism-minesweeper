"use strict";

export const annotate = (input) => {
  if (input.length <= 1) return input;
  if (!input.includes("*") || !input.includes(" ")) return input;

  /*
  
  Ideas:
  - Create a .map statement
  - Init variable w/ concatenated strings, at some point.
  
   handling mine surrounded by spaces:

   when looping through a row, stop at empty space
   grab index of current string, count the number of mines from the beginning of string to empty space
   count the number of mines from end of string to empty space
   - This causes a problem. How can I keep track of index in the array's string vs index in the concatenated string? May become tricky.
   Replace the current space with the sum of those numbers
   Continue loop until end of string
  */
};
