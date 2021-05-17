
import { Button, Divider } from 'antd';

// 2-14 静态属性，Setter和Getter

function trigger() {

    class Person {
        constructor(private _name: string){
        }
        get getName() {
            return this._name;
        }
        set name(name: string) {
            this._name = name
        }
    }
    
    let person = new Person('222')
    
    console.log('person getter', person.getName)

    // 单例模式
    class Demo {
        private static instance: Demo;
        private constructor(public name: string) {}
        // 静态方法
        static getInstance(name: string) {
            if (!this.instance) {
                this.instance = new Demo(name)
            }
            return this.instance
        }
    }

    const demo1 = Demo.getInstance('222')
    const demo2 = Demo.getInstance('333')
    console.log('demo1', demo1.name)
    console.log('demo2', demo2.name)

}



function demo4() {
    return (
        <div>
            <div>2-14 静态属性，Setter和Getter</div>
            <Divider>分割线</Divider>
            <Button type="primary" onClick={trigger}>点击我</Button>
        </div>
        
    )
}

export default demo4
