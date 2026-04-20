//  快排
//  分治 + 递归
const num = [5, 2, 3, 1]

const fastSort = (s = []) => {
    //  特殊情况优先跳出
    if (s.length <= 1) return s
    const left = []
    const right = []
    const base = s[0]
    let res = []


    for (let i = 0; i < s.length; i++) {
        if (s[i] === base) continue
        if (s[i] > base) {
            right.push(s[i])
        } else {
            left.push(s[i])
        }
    }
    const resL = fastSort(left)
    const resR = fastSort(right)

    return [...resL, base, ...resR]
}