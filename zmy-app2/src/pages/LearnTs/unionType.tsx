
import { Button, Divider } from 'antd';

// 4-4 联合类型和类型保护

function trigger() {
    
    interface Bird {
        fly: boolean;
        sing: () => {};
    }

    interface Dog {
        fly: boolean;
        bark: () => {};
    }

    // 联合类型
    function train(animal: Bird | Dog) {
        (animal as Bird).sing() // 类型断言的方式
        console.log('animal.fly', animal.fly)
    }

    train({
        fly: false,
        sing: () => {
            console.log('sing')
            return {}
        }
    })

    // 类型保护 typeof做类型保护
    function add(first: string | number, second: string | number) {
        if (typeof first === 'string' || typeof second === 'string') {
            return `${first}${second}`
        }
        return first + second
    }

    add(1, 2)

    // 使用 instanceof 来做类型保护


}

// 枚举类型
function EnumTrigger() {
    enum Status {
        OFFLINE, // 默认为0
        ONLINE, // 默认为1
        DELETED // 默认为2
    }
    console.log('Status', Status.OFFLINE, Status[0])
}

// 泛型
// 4-6 函数泛型
function typeParameter() {
    
    // 泛型
    function join<ABC>(first: ABC, second: ABC) {
        return `${first}${second}`
    };

    function join2<T, P>(first: T, second: P) {
        return `${first}${second}`
    };
    
    function map<T>(params: T[]) {
        return params;
    };

    map<number>([111, 222])

    join<string>('1', '1');

    join2<string, number>('1', 1);
    // 不传类型也可以，会有类型推断
    join2(1, '1');

}

// 4-7 类中的泛型以及泛型类型
function classtypeParameter() {

    interface Item {
        name: string;
    }
    
    class DataManager<T extends Item> {
        constructor(private data: T[]) {
        }
        getItem(index: number): string {
            return this.data[index].name;
        }
    }

    let data = new DataManager<Item>([{
        name: '222'
    }]);

    data.getItem(0);

    class DataManager2<T extends number | string> {
        constructor(private data: T[]) {
        }
        getItem(index: number): T {
            return this.data[index];
        }
    }

    let data2 = new DataManager2(['2'])
    console.log('data2', data2)


}


function demo4() {
    return (
        <div>
            <div>4-4 联合类型和类型保护</div>
            <Divider>分割线</Divider>
            <Button type="primary" onClick={trigger}>点击我</Button> <br/>
            <Button type="primary" onClick={EnumTrigger}>点击我EnumTrigger</Button> <br/>
            <Button type="primary" onClick={typeParameter}>泛型</Button> <br/>
            <Button type="primary" onClick={classtypeParameter}>类中的泛型</Button>
        </div>
    )
}

export default demo4
