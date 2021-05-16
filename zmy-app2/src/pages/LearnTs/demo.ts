
// TS 语法学习

import { demo2 } from './demo2'

demo2()

// 2-6 基础类型和对象类型
const count: number = 123;
const teacher: string = '1133';

// 对象类型
const teacherObj: {
    name: string;
    age: number;
} = {
    name: '111',
    age: 22
};
const numbers: number[] = [1, 2, 3];

class Person {}

const dell: Person = new Person();

// 函数类型
const getTotal: () => number = () => {
    return 123;
}


// 解构类型注解
function add({ first, second }: {first: number, second: number}): number {
    return first + second;
}

let res = add({first: 1, second: 2})
console.log('res', res)





interface Porint {
    x: number,
    y: number
}

let b: number = 123;

let c: Porint = {
    x: 1,
    y: 2
}

export const demo = () => {
    console.log('222', b);
    console.log('333', c);
}
