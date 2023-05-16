import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import RightIcon from "./icons/Right-icon";
import { useTranslation } from "next-i18next";

const App = () => {
  const { t } = useTranslation("common");

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

  const dataSelect = [
    {
      id: 1,
      text: "pipelines",
      to: "/pipelines/",
    },
    {
      id: 2,
      text: "refining",
      to: "/refining/",
    },
    {
      id: 3,
      text: "tankFarms",
      to: "/tankfarms/",
    },
    {
      id: 4,
      text: "underground",
      to: "/underground/",
    },
    {
      id: 5,
      text: "upstream",
      to: "/upstream/",
    },
    {
      id: 6,
      text: "chemicals",
      to: "/chemicals/",
    },
  ];
  return (
    <div className="open-modal">
      <Space>
        <Button type="primary" onClick={showDrawer}>
          <MenuFoldOutlined />
        </Button>
      </Space>
      <Drawer
        title={
          <Link onClick={onClose} href="/">
            <img src="/assets/images/log.png" alt="Image" />
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
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        <div>
          {dataSelect.map((item) => (
            <Link onClick={onClose} href={item.to}>
              <div className="homeSelect-right__container" key={item.id}>
                <div
                  onClick={onClose}
                  className="homeSelect-right__container-link"
                >
                  <p>{t(item.text, { ns: "common" })}</p>
                  <span>
                    <RightIcon />
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
