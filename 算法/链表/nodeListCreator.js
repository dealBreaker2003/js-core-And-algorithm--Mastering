

//  节点类
class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

//  生成器
const nodeListCreator = (s = [], order = true) => {

    const n = s.length
    if (n === 0) return {}

    if (order) {
        //  有序链表
        const head = new Node(s[0], null)
        let cur = head

        for (let i = 1; i < n; i++) {
            cur.next = new Node(s[i], null)
            cur = cur.next
        }
    }
    // else {
    //     //  乱序链表
    //     const randomIndex = Math.floor(Math.random() * n)
    //     const head = new Node(s[randomIndex], null)

    //     let cur = head
    //     for (let i = 1; i < n; i++) {
    //         //  一个拿走不放回的池
    //     }

    // }
    return head
}

export default nodeListCreator