
import { useAuth } from "context/auth-context";

import { Form, Input } from 'antd'

import { LongButton } from "unauthenticated-app/index";



export const LoginScreen = () => {

  const {login} = useAuth()

  const handleSubmit = (values: {username: string, password: string}) => {
    login(values)
  }

  return (
    <Form onFinish={handleSubmit} >
      <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
        {/* <label htmlFor="username">用户名</label> */}
        <Input type="text" placeholder={'用户名'} id={'username'}/>
      </Form.Item>
      <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
        {/* <label htmlFor="password">密码</label> */}
        <Input type="password" placeholder={'密码'} id={'password'}/>
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={'submit'} type={'primary'}>登录</LongButton>
      </Form.Item>
    </Form>
  )
}