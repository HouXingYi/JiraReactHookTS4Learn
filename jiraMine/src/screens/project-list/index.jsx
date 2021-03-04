import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState, useEffect } from "react"
import * as qs from 'qs'
import { cleanObject, useMount, useDebounce } from 'utils/index'

const apiUrl = process.env.REACT_APP_API_URL
console.log('apiUrl', apiUrl)
export const ProjectListScreen = () => {

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debouncedParam = useDebounce(param, 1000)
  const [users, setUsers] = useState([])


  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
    <List users={users} list={list}></List>
  </div>
}