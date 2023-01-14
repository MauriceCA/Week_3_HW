//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
let firstItem = ages[0];
let lastItem = ages[ages.length-1];
console.log(firstItem - lastItem);
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(35);
lastItem = ages[ages.length-1];
console.log(ages);
console.log(firstItem - lastItem);
//1c. Use a loop to iterate through the array and calculate the average age. 
let sum = 0;
for (let i = 0; i < ages.length; i++){
    sum += ages[i];
    console.log(i +" Iteration, sum = " + sum);
} 
console.log(sum);
console.log(ages);
console.log(sum / ages.length);

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let average = 0;
for (let i = 0; i < names.length; i++){
    average += names[i].length;
    console.log(i +" Iteration, average = " + average);
}
console.log(average / names.length);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
for(let i = 0; i < names.length; i++){
    console.log(names.join(' '));
}

//3. How do you access the last element of any array?
let lastElement = names.length - 1;
console.log(lastElement); //returned 5
console.log(names[5]);

//4. How do you access the first element of any array?
console.log(names[0]);

/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */
let namesArray = ["Alucard", "Kell", "Delilah"];

let nameLengths = namesArray.map(function(element){
    return element.length;
})
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let total = 0;
for (let i = 0; i < nameLengths.length; i++){
    total += nameLengths[i];
    console.log(i +" Iteration, sum = " + total);
}
console.log(total);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function repeatingWord(word, n){
    let repeat = " ";
    while (n > 0){
        repeat += word;
        n--;
    }
    return repeat;
    }
console.log(repeatingWord('Hello', 3));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName('John', 'Wick'));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let array1 = [1, 1, 255];
function sumOfArray(arr){
    let arrayTotal = 0;
    for (let i = 0; i < arr.length; i++){
        arrayTotal += arr[i];
        console.log(i +" Iteration, total = " + arrayTotal);
    } if (arrayTotal > 100){
        return (true);
    }
}
console.log(sumOfArray(array1));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let array2 = [5, 10, 15];
let arraySum = 0;
array2.map(averageOfArray);

function averageOfArray(arr){
    arraySum += arr;
    console.log(arraySum / array2.length);
    return arraySum / array2.length; //expecting 10
    
}

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than 
// the average of the elements in the second array.
let arrayOne = [5, 10, 15];
let arrayTwo = [1, 2, 3];

function compareAverageOfArray(arr1, arr2){
    let arrSum = 0;
    let arrSum2 = 0;
 
    for(let i = 0; i < arr1.length; i++){
        arrSum += arr1[i];
        console.log(i + " Iteration, sum = "+ arrSum);//added so I can see what happens at each iteration
    } 
    let avOfArr1 = arrSum / arr1.length;
        
        console.log(avOfArr1);
for (let j = 0; j < arr2.length; j++){
        arrSum2 += arr2[j];
        } 
        let avOfArr2 = arrSum2 / arr2.length;
        console.log(avOfArr2);
if (avOfArr1 > avOfArr2){
        console.log(avOfArr1);//should be 10
        console.log(avOfArr2); //should be 2
        return true;
        } else {
        return false;
    }    
    
}
console.log(compareAverageOfArray(arrayOne, arrayTwo));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let moneyInPocket = 12;
let isHotOutside = true;

function willBuyDrink(a, b){
    if ((a === true) && (b >= 10.50)){
        return true;
    } else{
        return false;
    }
} 
console.log(willBuyDrink(isHotOutside, moneyInPocket));

// Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

// 13. Diagnose if car engine air to fuel ratio requires service
let airIntake = 14;
let fuelInjection = 1;

function airToFuelRatio(air, fuel){
    if ((air === 14.7) && (fuel === 1)){ //air intake to fuel ratio should be 14.7:1
        return 'No action needed.';
    } else if(air > 14.7){// if air is over 14.7. car is running lean.
        return "Check Engine. Too much Air. Service air intake and test again."
    } else if (fuel < 1){ 
         // if fuel under 1, car is running lean. needs more fuel.
        return "Check Engine. Not enough fuel. Service fuel injection and test again.";
    } else if (air < 14.7){ //if air is under 14.7, car is running rich. Needs more air.
        return "Check Engine. Too little air. Service air intake and test again."
    } else {
        //Fuel over 1, car is running rich, needs less fuel
        return 'Check Engine. Too much fuel. Service fuel injection.';
    }
        
}

console.log(airToFuelRatio(airIntake, fuelInjection));




