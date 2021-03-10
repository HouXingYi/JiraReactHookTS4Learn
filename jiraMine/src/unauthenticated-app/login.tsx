
import { useAuth } from "context/auth-context";

import { Form, Input } from 'antd'

import { LongButton } from "unauthenticated-app/index";
import { useAsync } from "utils/use-async";



export const LoginScreen = ({onError}: {onError:(error: Error) => void}) => {

  const {login} = useAuth()

  const { run, isLoading } = useAsync(undefined, { throwOnError: true })

  const handleSubmit = async (values: {username: string, password: string}) => {
    try {
      await run(login(values))
    } catch(e) {
      onError(e)
    }
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
        <LongButton loading={isLoading} htmlType={'submit'} type={'primary'}>登录</LongButton>
      </Form.Item>
    </Form>
  )
}