import {Button, Drawer, Space} from "antd";
import {useState} from "react";
import {MenuFoldOutlined, CloseOutlined} from "@ant-design/icons";
import Link from "next/link";
import RightIcon from "./icons/Right-icon";
import {useTranslation} from "next-i18next";

const App = () => {
    const {t} = useTranslation("common", "menu");

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState("left");
    const showDrawer = () => {
        setOpen(true);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    const onClose = () => {
        setOpen(false);
    };

    const navbar = [
        {
            id: 1,
            text: "menu-project",
            to: "/about",
        },
        {
            id: 2,
            text: "menu-industrial",
            to: "/regulation",
        },
        {
            id: 3,
            text: "menu-liquefied",
            to: "/announcements",
        },
        {
            id: 4,
            text: "menu-mining",
            to: "/news",
        },
        {
            id: 5,
            text: "menu-contacts",
            to: "/contact/",
        },
    ];
    return (
        <div className="open-modal">
            <Space>
                <Button type="primary" onClick={showDrawer}>
                    <MenuFoldOutlined/>
                </Button>
            </Space>
            <Drawer
                title={
                    <Link onClick={onClose} href="/">
                        <img className="logo-modal" src="/assets/images/logo1.png" alt="Image"/>
                    </Link>
                }
                // footer={<FooterOpen />}
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                // closeIcon={<CloseOutlined />}
                key={placement}
                width={380}
                extra={
                    <Space>
                        <Button onClick={onClose}>
                            <CloseOutlined/>
                        </Button>
                    </Space>
                }
            >
                <div>
                    {navbar.map((item) => (
                        <Link onClick={onClose} href={item.to}>
                            <div className="homeSelect-right__container" key={item.id}>
                                <div
                                    onClick={onClose}
                                    className="homeSelect-right__container-link"
                                >
                                    <p>{t(item.text, {ns: "menu"})}</p>
                                    <span>
                    <RightIcon/>
                  </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};
export default App;
