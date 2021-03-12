
import { Table } from 'antd'
import {User} from './search-panel'
import dayjs from "dayjs";

import { TableProps } from "antd/es/table";
import { Link } from 'react-router-dom';
import { Pin } from 'components/pin';
import { useEditProject } from 'utils/project';
import { useProjectsQueryKey } from './util';


export interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project>{
  users: User[]
}

export const List = ({ users, ...props }: ListProps) => {

  const { mutate } = useEditProject(useProjectsQueryKey());
  const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin }); // 柯里化

  return (
    <Table 
      pagination={false} 
      rowKey={"id"} 
      columns={[
        {
          title: <Pin checked={true} disabled={true}></Pin>,
          render(value, project) {
            return <Pin checked={project.pin} onCheckedChange={pinProject(project.id)}></Pin>
          }
        },
        {
          title: '名称',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name}</Link>
            // return <span>111</span>
          }
        },
        {
          title: '部门',
          dataIndex: 'organization'
        },
        {
          title: '负责人',
          render(value, project) {
            return(
              <span>
                {users.find(user => user.id === project.personId)?.name || '未知'}
              </span> 
            )
          }
        },
        {
          title: '创建时间',
          render(value, project) {
            return (
              <span>
                { project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无' }
              </span>
            )
          }
        }
      ]}
      {...props}
    >
    </Table>

    // <table>
    //   <thead>
    //     <tr>
    //       <th>名称</th>
    //       <th>负责人</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {
    //       list.map((project) => {
    //         return (
    //           <tr key={project.id}>
    //             <td>{project.name}</td>
    //             <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
    //           </tr>
    //         )
    //       })
    //     }
    //   </tbody>
    // </table>    
  ) 
}