const letters = ['a', 'b', 'c'];
const endLength = 4;

// 1. TAKE THE CURRENT LETTERARRAY AND STORE IT AS NEW BASE (currentStringArray)
// 2.  FOR EVERY ENTRY FROM THE BASE (currentStringArray)  AND  FOR EVERY LETTER (letters) ADD A LETTER (AFTER THE PREFIX ) FROM LETTERS AND PUSH IT TO newStringArray
// 3. AS LONG AS STRING IS LESS THEN STRING TO CALCULATE

// 1.
let currentStringArray = letters;
let newStringArray = [];

function createStrings() {
	// 2.
	for (let i = 0; i < currentStringArray.length; i++) {
		for (let j = 0; j < letters.length; j++) {
			const currentStringPrefix = currentStringArray[i];
			const letterToAdd = letters[j];
			const newPrefix = currentStringPrefix + letterToAdd;
			newStringArray.push(newPrefix);
		}
	}

	currentStringArray = newStringArray;
	newStringArray = [];

	// 3.
	if (currentStringArray[0].length < endLength) {
		createStrings();
	} else {
		return currentStringArray;
	}
}

console.log('possibilities: ' + Math.pow(letters.length, endLength));

createStrings();

