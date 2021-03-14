
import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";

import { ButtonNoPadding, Row } from "components/lib";
import { Button, Dropdown, Menu } from "antd";

import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";

import { Route, Routes, Navigate } from 'react-router'

import { BrowserRouter as Router } from 'react-router-dom'

import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";

// import { ProjectModal } from "screens/project-list/project-modal";
// import { ProjectPopover } from "components/project-popover";





export const AuthenticatedApp = () => {

    return (
        <Container>
            <PageHeader></PageHeader>
            <Main>
                <Router>
                    <Routes>
                        <Route path={'/projects'} element={<ProjectListScreen></ProjectListScreen>}></Route>
                        <Route path={'/projects/:projectId/*'} element={<ProjectScreen></ProjectScreen>}></Route>
                        {/* 默认路由 */}
                        <Navigate to={window.location.pathname + '/projects'}></Navigate>
                    </Routes>
                </Router>
            </Main>
            {/* <ProjectModal></ProjectModal> */}
        </Container>
    )
}

const PageHeader = () => {
    return (
        <Header between={true}>
            <HeaderLeft gap={true}>
                <ButtonNoPadding type={'link'} onClick={resetRoute}>
                    <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'}></SoftwareLogo>
                </ButtonNoPadding>
                <span>项目</span>
                {/* <ProjectPopover></ProjectPopover> */}
                <span>用户</span>
            </HeaderLeft>
            <HeaderRight>
                <User></User>    
            </HeaderRight>
        </Header>
    )
}

const User = () => {
    const {logout, user} = useAuth()

    return (
        <Dropdown
            overlay={
                <Menu>
                    <Menu.Item key={"logout"}>
                        <Button onClick={logout} type={"link"}>
                            登出
                        </Button>
                    </Menu.Item>
                </Menu>
            }
            >
            <Button type={"link"} onClick={(e) => e.preventDefault()}>
                Hi, {user?.name}
            </Button>
        </Dropdown>
    )
}


const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr;
    height: 100vh;
`

const Header = styled(Row)`
    padding: 3.2rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
`

const HeaderLeft = styled(Row)`
`

const HeaderRight = styled.div``

const Main = styled.main``