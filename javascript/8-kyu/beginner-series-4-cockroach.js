//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour
//and returns it in cm per second, rounded down to the integer (= floored).

//For example:

// 1.08 --> 30

//Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    // 1 km is 100000 cm and 1 hour is 3600 seconds,
    // so I multiply by 100000 and divide by 3600 to convert km/h to cm/s.
    let cmPerSecond = s * 100000 / 3600;

    // I use Math.floor() to round the result down to a whole number.
    return Math.floor(cmPerSecond);
}
