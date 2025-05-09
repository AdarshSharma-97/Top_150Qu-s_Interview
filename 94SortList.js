/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const middle = getMiddle(head);
  const left = sortList(head);
  const right = sortList(middle);

  return merge(left, right);
};

const getMiddle = (head) => {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const middle = slow.next;
  slow.next = null;
  return middle;
};

const merge = (list1, list2) => {
  const dummyHead = { next: null };
  let tail = dummyHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;
  return dummyHead.next;
};
