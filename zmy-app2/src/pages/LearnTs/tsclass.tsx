
// 2-12 类的定义与继承
import { Button, Divider } from 'antd';


function trigger() {
    class Person {
        name: string = 'dell';
        getName() {
            return this.name;
        }
    }
    
    const person = new Person();
    
    console.log('person', person.getName())
    
    
    // 继承
    class Teacher extends Person {
        getTeacherName() {
            return 'dell';
        }
        // 重写父类方法
        getName() {
            // super代表父类
            return super.getName() + '+ lee';
            // return this.name;
        }
    }
    
    const teacher = new Teacher();
    
    
    console.log('teacher', teacher.getTeacherName())
    console.log('teacher getName', teacher.getName())
    
    
    // 2-13 类中的访问类型和构造器
    // private,protected,public 访问类型
    
    class Person2 {
        constructor(name: string) {
            this.name = name
        }
        public name: string = ''; // 默认是public
        private name2: string = '222'; // 允许在类内使用
        protected name3: string = ''; // 允许在类内使用 和 继承的子类 中使用
        public sayHi(): string {
            console.log('this.name', this.name)
            return this.name + this.name2;
        }
    }
    
    let person2 = new Person2('222')
    
    person2.name = '222';
    
    class Teacher2 extends Person2 {
        constructor(name: string, public name4: string) {
            super('dell') // 调用父类的构造函数
            this.name = name
        }
        public sayBye() {
            console.log(this.name4)
        }
    }
    
    let teacher2 = new Teacher2('222', '333')
    teacher2.sayBye()
}




function demo4() {
    return (
        <div>
            <div>2-12 类的定义与继承</div> 
            <Divider>分割线</Divider>
            <Button type="primary" onClick={trigger}>点击我</Button>
        </div>
        
    )
}


export default demo4
