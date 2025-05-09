var deleteDuplicates = function (head) {
  const dummy = new ListNode(0, head);
  let pre = dummy;
  let cur = head;
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next;
    }
    if (pre.next === cur) {
      pre = cur;
    } else {
      pre.next = cur.next;
    }
    cur = cur.next;
  }
  return dummy.next;
};
