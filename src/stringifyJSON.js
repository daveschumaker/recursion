// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // Checking what sort of data is provided from the test suite.
  // TODO: Remove this
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
  		} else if (typeof value === 'string') {
  			return '"' + value + '"';
  		}

  		// Working on the following problem:
  		// AssertionError: expected '[8,",3,4"]' to equal '[8,[[],3,4]]'
  		// If we have a nested array, let's do some RECURSION!
  		// TODO: Dave, what are you even doing in this function right now.
  		if (Array.isArray(value)) {
  			return stringifyJSON(value);
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

  // If we get to this point, we're going to assume the argument provided
  // is an object like "{}".
  if (typeof obj === 'object') {
  	// We're going to add key/values to this string that we'll return later.
  	var objectString = '{';

  	for (var property in obj) {
  		// Check if object has own property and then do something with it.
  		if (obj.hasOwnProperty(property)) {
  			objectString = objectString + property + ':' + obj[property];
  		}
  	}

  	// Add closing bracket
  	objectString = objectString + '}';

  	return objectString;
  }

};

var myObj = {};

// TODO: Remove this debugging stuff:
console.log('My function: ' + stringifyJSON(myObj));
console.log('Real function: ' + JSON.stringify(myObj));