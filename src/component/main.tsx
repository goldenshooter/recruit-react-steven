import {
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  Layout,
  Menu,
  Typography,
} from "antd";
import type { DatePickerProps, MenuProps } from "antd";
import { BarsOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const { Title } = Typography;
const { Header, Content } = Layout;
interface MainProps {
  userName: string;
}

const monthFormat = "MM/YYYY";

function Main({ userName }: MainProps) {
  let navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState<number | undefined>();
  const [expireDate, setExpireDate] = useState<string>("");
  const [CVC, setCVC] = useState<number | undefined>();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  useEffect(() => {
    const disabled = !Boolean(cardNumber && expireDate && CVC);
    setSubmitDisabled(disabled);
  }, [cardNumber, expireDate, CVC]);

  const onExpireDateChange: DatePickerProps["onChange"] = (_, dateString) => {
    setExpireDate(dateString);
  };

  const getNumber = (value: any) => {
    if (isNaN(parseInt(value))) {
      return undefined;
    }

    return parseInt(value);
  };

  const onCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardNumber(getNumber(value));
  };

  const onCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCVC(getNumber(value));
  };

  const onFinish = () => {
    console.log({ cardNumber, expireDate, CVC });
  };

  const onMenuClick: MenuProps["onClick"] = () => {
    navigate("/login");
  };

  const items: MenuItem[] = [
    {
      key: "log_out",
      icon: <LogoutOutlined />,
      label: "Log out",
    },
  ];

  return (
    <div className="main-container">
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
      >
        <Menu
          onClick={onMenuClick}
          style={{ width: 256 }}
          mode="vertical"
          items={items}
        />
      </Drawer>
      <Header className="main-header">
        <BarsOutlined
          className="margin-right-auto"
          onClick={() => setMenuOpen(true)}
        />
        <div className="margin-right-auto">Register card form</div>
      </Header>
      <Content className="content-container">
        <Title level={5} className="main-content-title">
          Welcome {userName}
        </Title>
        <Form
          className="main-credit-card-form"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Card Number"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input
              value={cardNumber}
              onChange={onCardNumberChange}
              placeholder="Card Number"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Expiration Date"
            rules={[
              { required: true, message: "Please select an expiration date" },
            ]}
          >
            <DatePicker
              format={monthFormat}
              picker="month"
              onChange={onExpireDateChange}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="CVC"
            rules={[{ required: true, message: "Please input CVC" }]}
          >
            <Input value={CVC} onChange={onCVCChange} placeholder="CVC" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button disabled={submitDisabled} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </div>
  );
}

export default Main;
