//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//Additionally, if the number is negative, return 0.

//Note: If a number is a multiple of both 3 and 5, only count it once.

//Courtesy of projecteuler.net (Problem 1).

function solution(number){
    // I start the sum at 0. If the number is negative (or too small to have
    // any multiples below it), the loop never runs and I just return 0.
    let sum = 0;

    // I loop through every number below the given number.
    // I use i < number (not <=) so the number itself is never included.
    for (let i = 1; i < number; i++) {
        // I use || so a number like 15 (a multiple of both 3 and 5)
        // only passes the check once and is only added once.
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    // I return the total of all the multiples I found.
    return sum;
}
