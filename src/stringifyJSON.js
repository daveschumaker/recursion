// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // Hint from specRunner.html:
  //JSON does not allow you to stringify functions or undefined values. So let's skip.
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return;
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
  			arrayString = arrayString + stringifyJSON(obj[i]);
  		} else {
  			arrayString = arrayString + ',' + stringifyJSON(obj[i]);
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
        // Not entirely sure if this is kosher, but trying to account for undefined values and functions.
        // If an undefined value is returned, then skip, otherwise keep looking at the object properties.
        if (typeof stringifyJSON(obj[property]) != 'undefined') {
  			 objectString = objectString + stringifyJSON(property) + ':' + stringifyJSON(obj[property]) + ',';
  		  }
      }
  	}

    // Remove last comma from our objectString
    if (objectString.slice(-1) == ',') {
      objectString = objectString.substring(0, objectString.length - 1);;
    }

  	// Add closing bracket
  	objectString = objectString + '}';

  	return objectString;
  }

};