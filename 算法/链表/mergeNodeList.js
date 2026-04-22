
//  合并有序链表
//  边界条件：：节点末尾是null！
//  递归
//  头节点
var mergeTwoLists = function (list1, list2) {
    let cur = null
    let next
    let branch

    cur = list1.val >= list2.val ? list1.val : list2.val
    branch = list1.val <= list2.val ? list1 : list2

    const L = list1.length + list2.length
    //  如果第一个链表结束，next会变成null，导致泄漏
    for (let i = 0; i < L; i++) {
        next = cur.next
        if (next.val <= branch.val) {
            //  接自己下一个
            cur.next = next
            cur = next
        } else {
            //  接另一个分支
            cur.next = branch
            cur = branch
            branch = next
        }
    }
    return cur
};

//  递归法：
//  时间复杂度：O(m+n) 调用自己的次数
//  空间复杂度：O(m+n) 调用栈全是函数
const mergeTwoListsRec = (L1, L2) => {
    if (L1 === null) {
        return L2
    } else if (L2 === null) {
        return L1
    } else if (L1.val < L2.val) {
        L1.next = mergeTwoListsRec(L1.next, L2)
        return L1
    } else {
        //  建立连接！！！挂钩子
        L2.next = mergeTwoListsRec(L1, L2.next)
        return L2
    }
}

//  头节点法：
//  时间复杂度：O(m+n）- 基本操作次数
//  空间复杂度：O(1) 就一个函数两个变量
const mergeTwoListsDum = (L1, L2) => {
    const DummyNode = { val: -1, next: null }
    const cur = DummyNode

    while (L1 !== null && L2 !== null) {
        if (L1.val < L2.val) {
            cur.next = L1
            cur = cur.next
            L1 = L1.next
        } else {
            cur.next = L2
            cur = cur.next
            L2 = L2.next
        }
    }
    //  存在有一个链表未完全遍历的情况
    //  手动补上
    cur.next = L1 !== null ? L1 : L2
    //  头节点发力了
    return DummyNode.next
}