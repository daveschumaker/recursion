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
//console.log('My function: ' + stringifyJSON(9));
//console.log('Real function: ' + JSON.stringify(9));