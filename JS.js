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
console.log(setNum(12122123.127894));



