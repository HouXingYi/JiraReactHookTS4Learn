
import { Button, Divider } from 'antd';

// 6-1 类的装饰器（1）
function trigger() {
  console.log('trigger!')
  // 装饰器本身是一个函数
  // 装饰器通过 @ 符号来使用

  function testDecorator(constructor: any) {
    constructor.prototype.getName = () => {
        console.log('dell!');
    }
    console.log('decorator!');
  }

  // 对装饰器做工厂函数包装
  function testDecorator2(flag: boolean) {
      if (flag) {
        return function(constructor: any) {
            constructor.prototype.getName2 = () => {
                console.log('dell2!');
            }
            console.log('decorator2!');
        }
      } else {
        return function(constructor: any) {
            console.log('decorator2!');
        }
      }
  }

  

  @testDecorator 
  @testDecorator2(true)
  class Test {
  };

  let test = new Test();
  (test as any).getName();
  (test as any).getName2();


}

function trigger2() {
    console.log('trigger2!')


    function testDecoratorFactory() {
        return function <T extends new (...args: any[]) => {}>(constructor: T) {
            return class extends constructor {
                name = 'lee';
                getName() {
                    console.log('this.name', this.name);
                    return this.name;
                }
            };
        }
    }
    

    let Test = testDecoratorFactory()(class {
        name: string;
        constructor(name: string) {
            this.name = name
        }
    })

    let test = new Test('dell');

    test.getName();

}


// 6-3 方法装饰器
function trigger3() {

    console.log('trigger3!')

    // 普通方法，target 对应的是类的 prototype
    function getNameDecorator(target: any, key: string) {
        console.log(target, key);
        // descriptor.writable = true;
    }

    class Test {
        name: string;
        constructor(name: string) {
            this.name = name
        }
        @getNameDecorator
        getName() {
            console.log('this.name', this.name);
            return this.name;
        }
    };

    let test = new Test('dell');
    test.getName();
    
}

// 6-7 装饰器实际使用的小例子
function trigger4() {
    const userInfo: any = undefined;

    function catchErrorFactory(msg: string) {
        return function (target: any, key: string, descriptor: PropertyDescriptor) {
            const fn = descriptor.value;
            descriptor.value = function() {
                try {
                    fn();
                } catch(e) {
                    console.log(`${msg} 不存在`);
                }
            }
    
        }
    }

    class Test {
        @catchErrorFactory('userInfo.name')
        getName() {
            return userInfo.name;
        }
        @catchErrorFactory('userInfo.age')
        getAge() {
            return userInfo.age;
        }
    }

    const test = new Test();
    test.getName();
    test.getAge();
}


function demo4() {
    return (
        <div>
            <div>6-1 类的装饰器（1）</div>
            <Divider>分割线</Divider>
            <Button type="primary" onClick={trigger}>类的装饰器</Button> <br/>
            <Button type="primary" onClick={trigger2}>类的装饰器标准写法</Button> <br/>
            <Button type="primary" onClick={trigger3}>方法装饰器</Button> <br/>
            <Button type="primary" onClick={trigger4}>装饰器实际使用的小例子</Button> <br/>
        </div>
    )
}

export default demo4
