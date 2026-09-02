//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//Example(Input --> Output)

// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]) --> "found the needle at position 5"

function findNeedle(haystack) {
// I use indexOf() to search through the haystack array
// and find the position (index) of the string "needle".
let needlePosition = haystack.indexOf("needle");

// I return the required message and add the position
// where I found "needle" in the array.
return "found the needle at position " + needlePosition;
}