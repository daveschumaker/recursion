// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  console.log('Type of: ' + typeof obj);
  console.log('Value: ' + obj);

  // Set initial termination conditions.
  // If the object is undefined, then return undefined.
  if (typeof obj === 'undefined') {
  	return 'undefined';
  }

  // Check if obj is a null value.
  if (obj === null) {
  	return 'null';
  }

  // Check if object is a number or a true / false value
  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return obj.toString();
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  // Check if object is array.
  if (Array.isArray(obj)) {
  	console.log('Its and array!');

  	// We're going to add array elements to this string that we'll return later.
  	var arrayString = '[';

  	// Working on the following problem:
  	// AssertionError: expected '["8"]' to equal '[8]'
  	// Not exact sure what's happening here, but we'll try it anyway.
  	// Creating a function to determine if value is a number or string.
  	// TODO: Refactor this to eliminate duplicate logic with checks for numbers and strings up above.
  	var isNumber = function(value) {
  		if (typeof value === 'number' ) {
  			return value;
  		} else {
  			return '"' + obj[i] + '"';
  		}
  	}

  	// Loop through the user provided array and add elements to the end of arrayString above.
  	// Also formatting the string so that it matches 
  	for (var i = 0; i < obj.length; i++) {
  		if (i == 0) {
  			arrayString = arrayString + isNumber(obj[i]);
  		} else {
  			arrayString = arrayString + ',' + isNumber(obj[i]);
  		}
  	}

  	// Add closing brace to end of our string.
  	arrayString = arrayString + ']';

  	return arrayString;
  }



};

var myObj = ["8"];

// TODO: Remove this debugging stuff:
console.log('My function: ' + stringifyJSON(myObj));
console.log('Real function: ' + JSON.stringify(myObj));