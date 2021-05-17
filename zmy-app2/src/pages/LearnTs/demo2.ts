
import { demo3 } from './interface'

demo3()

// 2-10 数组和元组

const numberArr: number[] = [1, 2, 3];

const arr: (number | string)[] = [1, '2', 2]

type User = {
    name: string,
    age: number
}

const objectArr: User[] = [
    {
        name: '222',
        age: 222
    }
]


// 元组 tuple
const teacherInfo: [string, string, number] = ['Dell', 'male', 18]

const teacherList: [string, string, number][] = [
    ['Dell', 'male', 18],
    ['Dell', 'male', 18],
    ['Dell', 'male', 18]
]

console.log('teacherList', numberArr, arr, objectArr, teacherInfo, teacherList)







export const demo2 = () => {
    console.log('学习2-10之后的');
}
