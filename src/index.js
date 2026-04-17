'use strict';

/**
 *
 * @param {number} fatherAge
 * @param {number} sonAge
 * @returns {number} numberYears
 */
const getYearsToDoubleAge = (fatherAge, sonAge) => {
  if (fatherAge - sonAge < 15 || sonAge < 0) return NaN;

  return fatherAge - 2 * sonAge;
};

const fatherAge = 60;
const sonAge = 40;
let numberYears = getYearsToDoubleAge(fatherAge, sonAge);

if (isNaN(numberYears)) {
  console.log('Error!');
}

if (numberYears === 0) {
  console.log('The father is now twice as old as his son.');
} else if (numberYears > 0) {
  console.log(
    `Father will be twice as old as his son in ${numberYears} ${numberYears === 1 ? 'year' : 'years'}`,
  );
} else if (numberYears < 0) {
  numberYears = Math.abs(numberYears);
  console.log(
    `Father was twice as old as his son ${numberYears} ${numberYears === 1 ? 'year' : 'years'} ago`,
  );
}
