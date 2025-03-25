var copyRandomList = function (head) {
  let pmap = new Map(),
    dummy = {},
    curr = head,
    copy = dummy;
  while (curr) {
    let newNode = new Node(curr.val, null, null);
    pmap.set(curr, newNode);
    (copy.next = newNode), (copy = newNode), (curr = curr.next);
  }
  (curr = head), (copy = dummy.next);
  while (curr) {
    copy.random = pmap.get(curr.random);
    (curr = curr.next), (copy = copy.next);
  }
  return dummy.next;
};
