// !UNFINISHED
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  function listToArray(node) {
    let arr = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }

  let it1 = listToArray(l1);
  let it2 = listToArray(l2);
  let storedSum = 0;

  let dummyHead = new ListNode(0);
  let current = dummyHead;

  const biggerList = l1.length > l2.length ? l1.length : l2.length;
  for (let n = 0; n < biggerList; n++) {
    let last1 = it1.length > 0 ? it1.pop() : 0;
    let last2 = it2.length > 0 ? it2.pop() : 0;
    // console.log(`estado de arrays: 1 => ${last1} 2 => ${last2}`)
    let prod = last1 + last2 + storedSum;
    prod >= 10 ? ((storedSum = 1), (prod = prod - 10)) : (storedSum = 0);
    current.next = new ListNode(prod);
    current = current.next;
  }
  return dummyHead.next;
};

console.log(`result: ${addTwoNumbers([1, 2, 4, 3], [5, 6, 4])}`);
