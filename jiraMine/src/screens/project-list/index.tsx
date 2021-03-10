import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState } from "react"
// import * as qs from 'qs'
import { useDebounce, useDocumentTitle } from 'utils/index'
import styled from "@emotion/styled";
import { ErrorBox } from "components/lib";
import { useProjects } from "utils/project"
import { useUsers } from "utils/user";

// import { Helmet } from 'react-helmet'


export const ProjectListScreen = () => {

  // 初始化state
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  // 防止重复点击
  const debouncedParam = useDebounce(param, 200)
  // 请求项目列表
  const { isLoading, error, data:list } = useProjects(debouncedParam)
  // 请求用户列表
  const { data: users } = useUsers();

  // 标题
  useDocumentTitle('项目列表')

  return (
    <Container>
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam}></SearchPanel>
      <ErrorBox error={error} />
      <List loading={isLoading} users={users || []} dataSource={list || []}></List>
    </Container>
  ) 
  
}


const Container = styled.div`
  padding: 3.2rem;
`