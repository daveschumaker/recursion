// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

  var getElementsByClassName = function(className){
    // your code here

    // Array that we'll use to temporarily store any elements we find that match our search criteria.
    var elementArray = [];

    // Begin traversing the DOM tree by going through every single element on the page using
    // jQuery's .each() function. I feel like this is kind of cheating and may need to go back and
    // rewrite this.
    $('*').each(function(index, value) {
      // Check if the className contains the string. Using contains rather than is equal to since some
      // HTML classes can have more than one class associated with them.
      var getClasses = $(this).attr('class');
      //console.log(getClasses);
      if (typeof getClasses != 'undefined' && getClasses.indexOf(className) != -1) {
        //console.log("FOUND!");
        //console.log("Valid Object Below:");
        var testObject = $(this);
        console.log(testObject.context);
        console.log($(this));
      }
      
    });

  };