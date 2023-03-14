//Find the last element of the following arrays.
let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where", 12,56];

let arr1last = [arr1[arr1.length -1]];
console.log(arr1last);
let arr2last = [arr2[arr2.length -1]];
console.log(arr2last);


//Write a js program that will join the following array elements into a string.
myPets = ["Cow", "Bird", "Snake", "Dog"];
const words = myPets.join(",");
console.log(words);

//Write a JS script to sort the following array items
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort();
console.log(arr3);

//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains duplicates
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let dupArr = arr.filter((x, index)=> {
    return arr.indexOf(x) ===index;
});
console.log(dupArr);

let dupedArr = arr.filter((x, index)=> {
    return arr.indexOf(x) !==index;
});
console.log(dupedArr);


//Write a JS script to search for the following word in the array. If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
let w = "we"
if (arr5.includes (w)) {
    console.log(w);
} 
else {
    console.log("The search was not found");
}

//Write a JS script to sort the following string
let word = "sevink"
let sev = word.split('').sort().join('');
console.log(sev);

