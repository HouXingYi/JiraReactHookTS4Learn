import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState, useEffect } from "react"
// import * as qs from 'qs'
import { cleanObject, useMount, useDebounce } from 'utils/index'
import { useHttp } from "utils/http"

// const apiUrl = process.env.REACT_APP_API_URL
// console.log('apiUrl', apiUrl)
export const ProjectListScreen = () => {

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debouncedParam = useDebounce(param, 200)
  const [users, setUsers] = useState([])


  const [list, setList] = useState([])
  const client = useHttp()

  useEffect(() => {
    client('projects', {data: cleanObject(debouncedParam)}).then(setList)
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json())
    //   }
    // })
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

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
    <List users={users} list={list}></List>
  </div>
}