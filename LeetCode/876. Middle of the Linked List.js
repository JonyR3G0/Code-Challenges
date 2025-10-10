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
var middleNode = function (head) {
    let calcNode = 0
    let actual = head
    if (actual.next === null) return actual
    while (actual !== null) {
        actual = actual.next
        calcNode++
    }
    actual = head
    for (let n = Math.floor(calcNode / 2) - 1; n > 0; n--) {
        actual = actual.next
    }
    return actual.next
};