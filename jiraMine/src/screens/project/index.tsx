import { Link } from "react-router-dom"

import { Routes, Route, Navigate } from "react-router"
import { KanbanScreen } from "screens/Kanban"
import { EpicScreen } from "screens/epic"

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={'kanban'}>看板</Link>
      <br/>
      <Link to={'epic'}>任务组</Link>

      <Routes>
        <Route path={'/kanban'} element={<KanbanScreen></KanbanScreen>}></Route>
        <Route path={'/epic'} element={<EpicScreen></EpicScreen>}></Route>
        {/* 默认路由 */}
        <Navigate to={window.location.pathname + '/kanban'}></Navigate>
      </Routes>
      
    </div>    
  )
}
