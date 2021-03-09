import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState, useEffect } from "react"
// import * as qs from 'qs'
import { cleanObject, useMount, useDebounce } from 'utils/index'
import { useHttp } from "utils/http"
import styled from "@emotion/styled";
import { Typography } from "antd"

// const apiUrl = process.env.REACT_APP_API_URL
// console.log('apiUrl', apiUrl)
export const ProjectListScreen = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | Error>(null)

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debouncedParam = useDebounce(param, 200)
  const [users, setUsers] = useState([])


  const [list, setList] = useState([])
  const client = useHttp()

  useEffect(() => {
    setIsLoading(true)
    // 请求列表
    client('projects', {data: cleanObject(debouncedParam)})
    .then(setList)
    .catch(error => {
      setList([])
      setError(error)
    })
    .finally(() => setIsLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam])

  useMount(() => {
    client('users').then(setUsers)
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json())
    //   }
    // })
  })

  return (
    <Container>
      <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
      { error ? <Typography.Text type={"danger"}>{error.message}</Typography.Text> : null }
      <List loading={isLoading} users={users} dataSource={list}></List>
    </Container>
  ) 
  
}


const Container = styled.div`
  padding: 3.2rem;
`