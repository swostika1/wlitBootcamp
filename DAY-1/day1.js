//write a program in javascript to display the multiplication table of a given parameter
function multiply(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + ' x ' + i + ' = ' + (number * i));
    }
}
multiply(5); 



//sum of the array
const sumArray = arr => {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const result = sumArray(numbers);
  console.log(result); 
  
//finding largest number among three

const Largest = (num1, num2, num3) => {
    let largest = num1;
    if (num2 > largest) {
      largest = num2;
    }
    if (num3 > largest) {
      largest = num3;
    }
    return largest;
  };
  
  const Numbers = Largest(5, 9, 3);
  console.log(`The largest number is ${Numbers}`);





//sum of odd numbers
const sumOfOdds = (arr) => {
    let sum = 0; 

   
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 2 !== 0) {
            sum += num; 
        }
    }

    return sum; 
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfOdds(numbers)); 


//squareof number

const filterAndSquareEvents = (arr) => {
    let result = new Array();
    let resultIndex = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { 
        let squared = 0;
        for (let j = 0; j < arr[i]; j++) {
          squared += arr[i]; 
        }
        result[resultIndex] = squared; 
        resultIndex++; 
      }
    }
  
    return result; 
  };

  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(filterAndSquareEvents(numbers)); 
  