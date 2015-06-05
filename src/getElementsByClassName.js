// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

  var getElementsByClassName = function(className){
    // Function that we can use to iterate through all nodes in an HTML document.
    var nodeIterator = function(node) {
      if (node.classList.contains(className)) {
        nodeArray.push(node); // Push node into our nodeArray for later use.
      }

      // Iterate through our node.
      // Initially, I was using node.childNodes and node.childNodes.hasChildNodes() which was giving me all sorts of errors. Switched to this method and things now seem to work flawlessly. Weird, man. Really weird.
      for (var i = 0; i < node.children.length; i++) {
        if (node.children[i].hasChildNodes) {
          nodeIterator(node.children[i]);
        }
      }
    }  

    // Array that we'll use to temporarily store any nodes we find that 
    // match our search criteria from className.
    var nodeArray = [];    

    nodeIterator(document.body);
    
    return nodeArray;

  };