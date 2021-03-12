import { Input, Form } from "antd"
import { UserSelect } from "components/user-select"
import { Project } from "./list"

export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[],
  param: Partial<Pick<Project, 'name'|'personId'>>,
  setParam: (param: SearchPanelProps['param']) => void
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
  
  console.log('users', users)

  return (
    <Form style={{marginBottom: '2rem'}} layout={"inline"}>
      <Form.Item>
        {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
        <Input 
          type="text" 
          value={param.name} 
          placeholder={'项目名'}
          onChange={(evt) => { 
            setParam({
              ...param, 
              name: evt.target.value
            }) 
          }}/>
        
      </Form.Item>
      <Form.Item>

        <UserSelect 
          defaultOptionName={'负责人'}
          value={param.personId} 
          onChange={(value) => { 
            setParam({
              ...param, 
              personId: value
            })
          }}>
        </UserSelect>

        {/* <Select value={param.personId} onChange={(value) => { 
            setParam({
              ...param, 
              personId: value
            })
          }}>
          <Select.Option value={''}>负责人</Select.Option>
          {
            users.map(user => <Select.Option key={user.id} value={String(user.id)}>{user.name}</Select.Option>)
          }
        </Select> */}

      </Form.Item>
    </Form>
  )
}