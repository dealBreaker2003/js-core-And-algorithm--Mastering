

//  节点类
class ListNode {
    constructor(
        //  使用参数属性 相当于在头部声明变量
        public val: number,
        public next: ListNode | null = null // 联合类型 使用默认参数类型
    ) {
        this.val = val
        this.next = next
    }
}

//  生成器
const nodeListCreator = (s: Array<number>): ListNode | null => {

    const n = s.length
    //  注意返回值
    if (n === 0) return null

    //  有序链表
    const head = new ListNode(s[0])
    let cur = head

    for (let i = 1; i < n; i++) {
        cur.next = new ListNode(s[i])
        cur = cur.next
    }
    return head
}

export default nodeListCreator