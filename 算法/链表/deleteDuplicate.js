
//  删除相同的节点

import nodeListCreator from "./nodeListCreator.js"



const deleteDuplicate = (L) => {
    //  单体排除
    if (L.next === null) return L

    //  头节点
    const DummyNode = {
        val: -1,
        next: L
    }
    //  操作区间
    let pre = DummyNode
    let cur = DummyNode.next
    let next = cur.next
    while (next !== null) {
        // console.log(next);
        if (cur.val === next.val) {
            //  重复了，删掉靠左边的
            pre.next = next
            cur = next
            next = next.next
        } else {
            //  没重复，窗口右移
            pre = cur
            cur = next
            next = next.next
        }
    }
    return DummyNode.next
}

const test = nodeListCreator([1, 1, 1, 2, 2, 3, 4])
const res = deleteDuplicate(test)
console.log(res.next);


//  原地操作
const alt = (head) => {
    //  直接对自己取反，避免next不存在，兼顾 0 和 1
    if (!head) return head
    let cur = head
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}