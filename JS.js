// console.log('脚本开始')


// const fn = async () => {
//     const test = new Promise((resolve) => {
//         console.log('执行器同步')
//         setTimeout(() => {
//             resolve(console.log("resolve!"))
//         }, 1000);
//     })
//     await test
//     console.log(1)
// }
// fn = () => {
//     return new Promise((resolve) => {
//         console.log('执行器同步')
//         setTimeout(() => {
//             resolve(console.log("resolve!"))
//         }, 1000);
//     }).then(() => console.log(1))

// }
// fn()
// console.log('脚本尾巴')

// Promise.resolve(1)
//     .then((val) => console.log(val))
//     .then(() => { throw new Error('出错了！') })
//     .then(() => console.log('会执行吗'))
//     .catch((err) => console.log("错误：", err))
//     .then(() => 1)
//     .then((val) => console.log("尾巴会执行吗", val))

// async function foo() {
//     return 1
// }

// const fn = async () => {
//     new Promise((resolve) => {

//         console.log(100)
//         resolve(77)
//     })
//     return 99
// }

// foo().then(console.log)

// fn().then(console.log)


// async function async1() {
//     console.log(1)
//     // const res = await async2()
//     async2().then(console.log)
// }

// async function async2() {
//     console.log(2)
//     return new Promise((resolve) => {
//         console.log(3)
//         resolve(4)
//     })
// }

// console.log(5)

// setTimeout(() => {
//     console.log(6)
// }, 0)

// async1()

// new Promise((resolve) => {
//     console.log(7)
//     resolve()
// }).then(() => {
//     console.log(8)
// }).then(() => {
//     console.log(9)
// })

// console.log(10)

//  5 1 2 3 7 10 8 9 4 6


// async function foo() {
//     return 1
// }

// async function bar() {
//     return Promise.resolve(2)
// }

// bar().then(console.log)
// foo().then(console.log).then(() => console.log(4))
// Promise.resolve(3).then(console.log)
// function animal(type) {
//     this.type = type
// }

// const dog = new animal('dog')
// console.log(dog.type)


// const foo = 1
// foo.split('')

//  字符串反转

const reverseStr = (s = []) => {

    let left = 0
    let right = s.length - 1
    while (left < right) {
        const t = s[left]
        s[left] = s[right]
        s[right] = t

        left++
        right--
    }
    return s
}

const t = ['h', 'e', 'l', 'l', 'o', '!']

// console.log(reverseStr(t));

//  有效数字 二连

const test1 = 123421256.7

const setNum = (s = 0) => {
    let t = s
    if (s < 0) t = -s
    const div = String(t).split('.')
    const int = div[0]

    //  处理整数：
    let index = int.length % 3
    let res = int.slice(0, index)
    if (res.length) res += ','

    while (index < int.length) {
        res += int.slice(index, index + 3)
        if (index + 3 < int.length) res += ','
        index += 3
    }

    //  处理小数
    if (div[1]) {
        res += '.'
        res += div[1]
    }
    return s > 0 ? res : res = '-' + res
}
// console.log(setNum(12122123.127894));

//  可变窗口

const getMaxLength = (s = '') => {

    const maxSet = new Set()
    const lengthPool = []
    let count = 0
    if (s.length <= 1) return s.length
    for (let i = 0; i < s.length; i++) {
        if (maxSet.has(s[i])) {
            maxSet.clear()
            maxSet.add(s[i], i)
            lengthPool.push(count)
            count = 1
            continue
        }
        maxSet.add(s[i], i)
        count++
    }
    lengthPool.push(count)
    return lengthPool.sort((a, b) => b - a)[0]
}

const s = 'abcabcd123411'
// console.log(getMaxLength(s));


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



function quickSort(nums) {
    if (nums.length <= 1) return nums;

    // 选择基准（这里简单选中间的，可以防止完全有序时的最坏情况）
    const pivotIndex = Math.floor(nums.length / 2);
    const pivot = nums[pivotIndex];

    const left = [];
    const right = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === pivotIndex) continue; // 跳过基准自身
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    // 递归处理左右两半，并拼接
    return [...quickSort(left), pivot, ...quickSort(right)];
}


// console.log(fastSort(num));
// console.log(quickSort(num));

//  快排应用
//  快速选择


// const quickSelect = (s = [], k = 0) => {
//     //  特殊情况优先跳出
//     if (s.length <= 1) return s
//     const left = []
//     const right = []
//     const base = s[0]
//     let res = []


//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === base) continue
//         if (s[i] > base) {
//             right.push(s[i])
//         } else {
//             left.push(s[i])
//         }
//     }
//     if (right.length === k - 1)
//         const resL = quickSelect(left)
//     const resR = quickSelect(right)

//     return [...resL, base, ...resR]
// }

// function findKthLargest(nums, k) {
//     // 第 K 大的元素，也就是从小到大排序后下标为 nums.length - k 的元素
//     const targetIndex = nums.length - k;

//     function quickSelect(left, right) {
//         // 选取最右边的元素作为基准
//         let pivot = nums[right];
//         let p = left; // p 最终会是指向基准应该在的正确位置

//         // 原地 partition (双指针)
//         for (let i = left; i < right; i++) {
//             console.log(nums[i],pivot);

//             if (nums[i] <= pivot) {
//                 // 交换
//                 [nums[p], nums[i]] = [nums[i], nums[p]];
//                 p++;
//             }

//         }
//         console.log(nums);
//         // 把基准换到正确的位置
//         [nums[p], nums[right]] = [nums[right], nums[p]];

//         // 判断 p 和目标索引的关系
//         if (p === targetIndex) {
//             return nums[p]; // 找到了！
//         } else if (p < targetIndex) {
//             // 去右半部分找
//             return quickSelect(p + 1, right);
//         } else {
//             // 去左半部分找
//             return quickSelect(left, p - 1);
//         }
//     }

//     return quickSelect(0, nums.length - 1);
// }

const selectNums = [5, 7, 1, 3, 2, 9, 4]
// findKthLargest(selectNums, 2)


const quickSelect = (nums = [], k = 0) => {
    const targetIndex = nums.length - k
    const selectIndex = (L, R) => {
        const base = nums[R]
        let cur = L
        for (let i = L; i < R; i++) {
            if (nums[i] < base) {
                //  小于标准先拿到前面
                [nums[cur], nums[i]] = [nums[i], nums[cur]]
                //  左指针前进一步
                cur++
            }
        }
        //  标准归位
        [nums[cur], nums[R]] = [nums[R], nums[cur]]
        //  判断标准是否命中
        if (cur === targetIndex) {
            return nums[cur]
        } else if (cur < targetIndex) {
            //  小了，去右半区
            return selectIndex(cur + 1, R)
        } else {
            //  大了，去左半区
            return selectIndex(L, cur - 1)
        }
    }
    return selectIndex(0, nums.length - 1)
}

// const res = quickSelect(selectNums, 2)
// console.log(res);


const testReturn = () => {
    const inner = () => {
        return 1
    }
    inner()
}

console.log(testReturn());