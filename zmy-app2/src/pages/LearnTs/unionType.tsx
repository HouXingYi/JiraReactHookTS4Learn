
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
    
}



function demo4() {
    return (
        <div>
            <div>4-4 联合类型和类型保护</div>
            <Divider>分割线</Divider>
            <Button type="primary" onClick={trigger}>点击我</Button> <br/>
            <Button type="primary" onClick={EnumTrigger}>点击我EnumTrigger</Button>
            <Button type="primary" onClick={typeParameter}>泛型</Button>
        </div>
    )
}

export default demo4
