'use strict';
/**
 * 
 * @param {number} fatherAge 
 * @param {number} sonAge 
 * @returns {number} numberYears
 */
let calculateDifferenceIn15Years = (fatherAge, sonAge) => {
  let numberYears = 0;
  if(fatherAge / sonAge >= 2) {
    while((fatherAge + numberYears) / 2 !== sonAge + numberYears) {
      numberYears++;
    }
  } else {
    while((fatherAge + numberYears) / 2 !== sonAge + numberYears) {
      numberYears--;
    }
  }
  
  return numberYears;
}

let fatherAge = 50
let sonAge = 30
let numberYears = false
if(typeof fatherAge !== 'number' || typeof sonAge !== 'number') {
  console.log('Error! Invalid data type entered.')
} else {
  numberYears = calculateDifferenceIn15Years(fatherAge, sonAge);
}
if(fatherAge < sonAge) {
  console.log("Error! The son's age cannot be greater than the father's age.")
} else if ((fatherAge - sonAge) < 15) {
  console.log('Error! The age difference must be at least 15 years.') 
} else if (fatherAge < 0 || sonAge < 0) {
  console.log('Error! Age cannot be negative.') ;
} else if(numberYears > 0) {
console.log(`Father will be twice as old as his son in ${numberYears} ${numberYears === 1 ? 'year' : 'years'}`) 
} else if(numberYears < 0) {
  console.log(`Father was twice as old as his son ${Math.abs(numberYears)} ${Math.abs(numberYears) === 1 ? 'year' : 'years'} ago`) 
} else if (numberYears === 0){
  console.log('The father is now twice as old as his son.') 
}
