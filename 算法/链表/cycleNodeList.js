
//  环形链表

const haveCircle = (head) => {
    //  哈希表

    // const myMap = new Set()
    // let cur = head
    // while (cur.next) {
    //     if (myMap.has(cur)) {
    //         return true
    //     }
    //     myMap.add(cur)
    //     cur = cur.next
    // }
    // return false

    //  快慢指针
    if (head === null || head.next === null) return false

    let slow = head
    let fast = head.next

    while (slow !== fast) { //  环形一定跑圈，重合的时候就跳出
        //  注意这里的边界条件，下面用了两个.next要保证第一层不是null
        if (fast == null || fast.next == null) {
            return false
        }
        一快一慢
        slow = slow.next
        fast = fast.next.next
    }
    return true
}