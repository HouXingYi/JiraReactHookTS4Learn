
// 2-11 Interface接口


interface Person {
    name: string;
    age?: number; // 可选的属性
    readonly age2?: number; // 只读
    [propName: string]: any; // 可以有其他属性
    say(): string; // 方法
}

// 接口继承
interface Teacher extends Person {
    teach(): string;
}




const getPersonName = (person: Teacher): void => {
    console.log(person.name);
}

// 当通过变量传参的情况，不会强校验
let obj = {
    name: '222',
    sex: '2',
    say() {
        return '222';
    },
    teach() {
        return '333';
    }
}

getPersonName(obj)
getPersonName({
    name: '222',
    say() {
        return '222';
    },
    teach() {
        return '333';
    }
})

// 类 应用 接口
class User implements Person {
    name = '222';
    say() {
        return 'hello';
    }
}

// 定义函数的接口类型
interface SayHi {
    (word: string): string
}

const say: SayHi = (word: string) => {
    return word;
}





export const demo3 = () => {
    console.log('学习interface');
}
