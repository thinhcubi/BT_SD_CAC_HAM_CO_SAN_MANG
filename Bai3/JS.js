let arr= 'c';
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let result = [];

   for(let x=0;x<arr.length;x++){
       if(UPPER.indexOf(arr[x])!== -1)
       {
           result.push(arr[x].toLowerCase());
       } else if (LOWER.indexOf(arr[x])!==-1) {
           result.push(arr[x].toUpperCase());
       } else {
         result.push(arr[x]);
       }
   }
   console.log(result.join(''));