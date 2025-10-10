/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * @author Jonathan
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let twicer = head
    let oner = head
    while (twicer && twicer.next) {
        twicer = twicer.next.next
        oner = oner.next
    }
    return oner
};