// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


// Test array
// TODO: Remove this debugging stuff:
var continents = [];
continents[0] = "Europe";
continents[1] = "Asia";
continents[2] = "Australia";
continents[3] = "Antarctica";
continents[4] = "North America";
continents[5] = "South America";
continents[6] = "Africa";

var stringifyJSON = function(obj) {
  // your code goes here

  // Set initial termination conditions.
  // If the object is undefined, then return undefined.
  if (typeof obj === 'undefined') {
  	return 'undefined';
  }

  // Check if obj is a null value.
  if (obj === null) {
  	return 'null';
  }

  // Check if object is a number
  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return obj.toString();
  }

  // Check if object is array.
  if (Array.isArray(obj)) {
  	// We're going to add array elements to this string that we'll return later.
  	var arrayString = '[';

  	// Loop through the user provided array and add elements to the end of arrayString above.
  	// Also formatting the string so that it matches 
  	for (var i = 0; i < obj.length; i++) {
  		if (i == 0) {
  			arrayString = arrayString + '"' + obj[i] + '"';
  		} else {
  			arrayString = arrayString + ',"' + obj[i] + '"';
  		}
  	}

  	// Add closing brace to end of our string.
  	arrayString = arrayString + ']';

  	return arrayString;
  }

};

// TODO: Remove this debugging stuff:
console.log('My function: ' + stringifyJSON(9));
console.log('Real function: ' + JSON.stringify(9));