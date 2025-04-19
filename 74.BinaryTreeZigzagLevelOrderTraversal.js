const zigzagLevelOrder = function (root) {
  let result = [];

  function traverseLevels(root, l) {
    //check if node is null, if not return. This will happen when we reach a leaf node
    if (!root) return;
    //if we have already started populating this index of the result array
    if (result[l]) {
      //check if the level is odd or even so that we know in which direction to add nodes to the result
      //if level's even
      if (l % 2 === 0) {
        //push result onto result array at index
        result[l].push(root.val);
      } else {
        //if level is even, unshift it onto the beginning of the result array at that index
        result[l].unshift(root.val);
      }

      //otherwise (if nothing yet exists at that index / level) create new array with that item in it
    } else {
      result[l] = [root.val];
    }

    //recursively call that function for the left and right nodes, incrementing the level with each call
    traverseLevels(root.left, l + 1);
    traverseLevels(root.right, l + 1);
  }

  //initial call of function using root and index 0
  traverseLevels(root, 0);

  return result;
};
