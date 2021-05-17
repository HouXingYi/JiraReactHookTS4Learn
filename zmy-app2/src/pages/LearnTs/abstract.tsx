
import { Button, Divider } from 'antd';

// 2-14 静态属性，Setter和Getter

function trigger() {
    // 抽象类
    // 多个类有相同的东西，与 interface 有一定相似之处

    // abstract class Geom {
    //     abstract getType(): number;
    //     abstract getArea(): number;
    // }

    // class Circle extends Geom{
    // }

    // let circle = new Circle()

    // console.log('circle', circle)
    
}



function demo4() {
    return (
        <div>
            <div>2-15 抽象类</div>
            <Divider>分割线</Divider>
            <Button type="primary" onClick={trigger}>点击我</Button>
        </div>
    )
}

export default demo4
