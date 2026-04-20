//  两数之和
//  变校验边存放
//  哈希表/     一一对应即可
const twoNums = (arr, target) => {
    const lineMap = new Map()
    const result = []
    for (let i = 0; i < arr.length; i++) {

        //  先检验是否有
        const other = target - arr[i]
        if (lineMap.has(other)) {
            const index1 = lineMap.get(other)
            const index2 = i
            result.push({ index1, index2 })
        }
        //  再进入队列
        lineMap.set(arr[i], i)
    }
    return result
}

const arr = [0, 1, 3, 5, 7, 3, 2, 6]
// const res = twoNums(arr, 4)
// console.log(res)

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

//  合并有序数组
const orderArr = (arr1 = [], arr2 = []) => {
    const Arr1 = arr1.filter((item) => item !== 0)
    const Arr2 = arr2.filter((item) => item !== 0)
    // Arr2.forEach((el) => Arr1.push(el))
    // console.log(Arr1, Arr2)
    const n = Arr1.length

    for (let index = 0; index < Arr2.length; index++) {
        //  判断是不是超大
        if (Arr2[index] > Arr1[n - 1]) {
            Arr1.push(Arr2[index])
            continue
        }
        //  正常流程
        for (let i = 0; i < n; i++) {
            if (Arr2[index] < Arr1[i]) {
                for (let j = n - 1; j >= i; j--) {
                    Arr1[j + 1] = Arr1[j]
                }
                Arr1[i] = Arr2[index]
            }
        }
    }
    return Arr1
}

// const res = orderArr(nums1, nums2)
// console.log(res)


//  怎么排序？

//  买卖股票最佳时机：
//  

//  反转字符串：左右指针
const reverseStr = (target = Array) => {
    const n = target.length
    let left = 0, right = n - 1
    while (left < right) {
        const temp = target[left]
        target[left] = target[right]
        target[right] = temp

        left++
        right--
    }

    return target
}

// const s = ["h", "e", "l", "l", "o"]
// const t = reverseStr(s)
// console.log(t)


//  移动零
//  指针跳变值
//  快慢指针    快指针遍历数组，慢指针是下一个非目标成员应该交换的位置
const handleZero = (t = []) => {
    let zeroCount = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] === 1) {
            zeroCount++
        } else if (zeroCount) {
            const temp = t[i - zeroCount]
            t[i - zeroCount] = t[i]
            t[i] = temp
        }
    }
}

// const zeroArr = [1, 0, 0, 3, 4, 0, 5, 7, 1, 2, 1, 4, 1, 2, 4, 5]
// handleZero(zeroArr)
// console.log(zeroArr)

//  三数相加
//  左右双指针 + 数组单项确定性
//  初一外层去重  和指针移动去重  以及内层动态调整

const sumThree = (t = []) => {
    //  先排序
    t.sort((a, b) => a - b)
    const res = []
    //  外层遍历
    for (let i = 0; i < t.length - 1; i++) {
        if (t[i] > 0) break
        //  去重
        if (t[i] === t[i - 1]) continue
        let left = i + 1, right = t.length - 1

        //  每个数右边区间组合
        while (left < right) {
            const sum = t[i] + t[left] + t[right]
            if (sum === 0) {
                //  这里不能break，记录的同时移动左右指针，一轮找到所有组合
                res.push([t[i], t[left], t[right]])
                //  指针去重   如果不满足直接不进入循环
                while (left < right && t[right] === t[right - 1]) right--
                while (left < right && t[left] === t[left + 1]) left++
                //  正经的结算移动
                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return res
}


// const nums = [-1, 0, 1, 2, -1, -4]
// const res = sumThree(nums)
// console.log(res)



//  快速排序


//  字节    有效数字输出：

//`-123,4.5678

const setNum = (t = 0) => {
    //  变字符串    分区 整数 和 小数
    const tar = String(t > 0 ? t : -t)
    const chunk = tar.split('.')
    console.log(tar);
    //  整数部分开始拆分
    const int = chunk[0]
    let res = ''
    //  头部初始化  边界条件
    let strIndex = int.length % 3
    res += int.slice(0, strIndex)
    if (res.length) res += ','
    while (strIndex < int.length) {
        res += int.slice(strIndex, strIndex + 3)
        //  末尾边界条件
        if (strIndex + 3 < int.length) res += ','
        strIndex += 3
    }
    //  最后超级拼装
    res += '.'
    res += chunk[1]
    return t > 0 ? res : '-' + res
}

const se = -12332445.233
const res1 = setNum(se)
console.log(res1)


//  防抖：


