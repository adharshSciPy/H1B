import React from 'react'
import Logo from "../../assets/header-logo.png"
import "./Sidebar.css"
import { Menu } from 'antd'
import { HomeOutlined, UserOutlined, ContainerOutlined, DiffOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={Logo} />
            </div>
            <Menu>
                <Menu.Item key='home' icon={<HomeOutlined />}>
                    Dashboard
                    <span></span>
                </Menu.Item>
                <Menu.Item key='home' icon={<UserOutlined />}>
                    Profile
                    <span></span>
                </Menu.Item>
                <Menu.Item key='home' icon={<ContainerOutlined />}>
                    Listing
                    <span></span>
                </Menu.Item>
                <Menu.Item key='home' icon={<DiffOutlined />}>
                    Blogs
                    <span></span>
                </Menu.Item>
                <Menu.Item key='home' icon={<UserAddOutlined />}>
                    Social Media
                    <span></span>
                </Menu.Item><Menu.Item key='home' icon={<SettingOutlined />}>
                    Settings
                    <span></span>
                </Menu.Item><Menu.Item key='home' icon={<LogoutOutlined />}>
                    Signout
                    <span></span>
                </Menu.Item>
            </Menu>

        </div>
    )
}

export default Sidebar