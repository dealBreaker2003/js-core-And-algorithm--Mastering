interface User {
    readonly id: number
    name: string
    age: number
    email?: string
}




const ivy: User = {
    id: 1,
    name: 'ivy',
    age: 17
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const tempID = getProperty(ivy, 'id')
const tempName = getProperty(ivy, 'name')
const tempAge = getProperty(ivy, 'age')

// console.log(tempID, tempName, tempAge);

// console.log(ivy);
// console.log(ivy.email);

type Name = string
const sin: Name = 'sin'

type ID = number | string

const fr: ID = 1
const test: ID = '1'
// console.log(typeof fr);
// console.log(typeof test);

type hasName = { name: string }
type hasAge = { age: number }
type Person = hasName & hasAge

const personA: Person = {
    name: 'sin',
    age: 19
}

type theFour = 'Nozomi' | 'mizore' | 'Natsuki' | 'Yuko'
const nozomi: theFour = 'Nozomi'
// console.log(typeof nozomi);

const getSound = (role: theFour) => console.log(role);
// getSound('Natsuki')



//  范型

function getFirst<T>(arr: T[]): T {
    return arr[0]
}

function getFirstNonT(arr: any[]): any {
    return arr[0]
}

function getFirstNorm(arr: any[]) {
    return arr[0]
}

const resNor = getFirstNorm(['1', 2, 3, 4])

const resF = getFirst<number>([1, 2, 3, 4])
const resS = getFirst<string>(['1', '2', '3', '4'])
// console.log(resF, resS);

const resNonF = getFirstNonT([1, 2, 3, 4])

interface Fish { swim(): void }
interface Bird { fly(): void }

// 返回类型是 animal is Fish，告诉 TS "如果返回 true，参数就是 Fish"
//  怎么守卫的？
function isFish(animal: Fish | Bird): animal is Fish {
    return 'swim' in animal
}

const Ding: Fish = { swim(): void { } }

const Dong: Bird = {
    fly(): void { },
}

console.log(isFish(Ding));
console.log(isFish(Dong));
// function move(animal: Fish | Bird) {
//   if (isFish(animal)) {
//     animal.swim()   // TS 知道是 Fish
//   } else {
//     animal.fly()    // TS 知道是 Bird
//   }
// }