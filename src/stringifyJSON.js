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
  			objectString = objectString + stringifyJSON(property) + ':' + stringifyJSON(obj[property]) + ',';
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

var myObj = [{"a":"b"},{"c":"d"}];

// TODO: Remove this debugging stuff:
console.log('My function: ' + stringifyJSON(myObj));
console.log('Real function: ' + JSON.stringify(myObj));