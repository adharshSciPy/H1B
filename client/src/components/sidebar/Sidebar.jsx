import { React, useState } from 'react'
import Logo from "../../assets/header-logo.png"
import "./Sidebar.css"
import { Menu, Button } from 'antd'
import {
    HomeOutlined, UserOutlined, ContainerOutlined, DiffOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined, PushpinOutlined,
    PushpinFilled,
} from "@ant-design/icons"

function Sidebar() {
    const [selectedKey, setSelectedKey] = useState("dashboard");
    const [isPinned, setIsPinned] = useState(false);
    const togglePin = () => {
        setIsPinned((prev) => !prev);
    };

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };
    return (
        <>
            <div className="container">
                <div className={`sidebar ${isPinned ? "pinned" : "collapsed"}`}>
                    <div className="sidebar-content">
                        <Menu className='menu'
                            mode="vertical"
                            selectedKeys={[selectedKey]}
                            onClick={handleMenuClick}
                        >
                            <div className='logo'>
                                <img src={Logo} />
                            </div>
                            <Menu.Item key='dashboard' icon={<HomeOutlined />}>
                                {isPinned && "Dashboard"}
                                <span></span>
                            </Menu.Item>
                            <Menu.Item key='profile' icon={<UserOutlined />}>
                                {isPinned && "Profile"}
                                <span></span>
                            </Menu.Item>
                            <Menu.Item key='listing' icon={<ContainerOutlined />}>
                                {isPinned && "Listing"}
                                <span></span>
                            </Menu.Item>
                            <Menu.Item key='blogs' icon={<DiffOutlined />}>
                                {isPinned && "Blogs"}
                                <span></span>
                            </Menu.Item>
                            <Menu.Item key='socialmedia' icon={<UserAddOutlined />}>
                                {isPinned && "Social Media"}
                                <span></span>
                            </Menu.Item><Menu.Item key='settings' icon={<SettingOutlined />}>
                                {isPinned && "Settings"}
                                <span></span>
                            </Menu.Item><Menu.Item key='signout' icon={<LogoutOutlined />}>
                                {isPinned && "Signout"}
                                <span></span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className="pin-pin">
                    <Button
                        className="pin-button"
                        type="text"
                        icon={isPinned ? <PushpinFilled /> : <PushpinOutlined />}
                        onClick={togglePin}
                    />
                </div>
            </div>
        </>
    )
}

export default Sidebar