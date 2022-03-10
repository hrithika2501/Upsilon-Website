import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLogo } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen ={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
            
                <SidebarMenu>
                <SidebarLogo></SidebarLogo>
                    <SidebarLink to='/'>Home</SidebarLink>
                    <SidebarLink to=''>Manage Courses</SidebarLink>
                    <SidebarLink to=''>Enrolled Courses</SidebarLink>
                    <SidebarLink to=''>Help Center</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
