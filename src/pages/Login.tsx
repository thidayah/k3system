import { useState } from "react";
import { Button, Checkbox, Form, Input, Flex, Typography, Image } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import Images from "../utils/Images";

import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const boxStyle = {
  minHeight: '100vh',
  position: 'relative'
}

const iconStyle = {
  color: '#101112',
  fontWeight: 'bolder',
  fontSize: 20
}

const Login = () => {
  const [isShow, setShow] = useState(false)

  function IconPassword() {
    return (
      !isShow ?
        <LockOutlined
          style={iconStyle}
          onClick={() => setShow(true)}
        />
        : <UnlockOutlined
          style={iconStyle}
          onClick={() => setShow(false)}
        />
    )
  }

  return (
    <>
      <div style={{
        width: '101%',
        height: '100px',
        position: 'absolute',
        backgroundColor: '#EFF0F5',
        rotate: '-3deg',
        bottom: 75,
        left: -5,
      }}>

      </div>
      <div style={{
        width: '101%',
        height: '150px',
        position: 'absolute',
        backgroundColor: '#EFF0F5',
        bottom: -20,
        left: -5,
      }}>

      </div>
      <Flex
        style={boxStyle}
        justify={'center'}
        align={'center'}
      >
        <Form
          name="login"
          initialValues={{ remember: false }}
          style={{
            minWidth: 400,
            backgroundColor: 'white',
            padding: 50,
            borderRadius: 5,
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 12px 1px'
          }}
        // onFinish={onFinish}
        >
          <center>
            <Image
              src={Images.LogoLogin}
              preview={false}
              style={{
                marginTop: 10,
                marginBottom: 50
              }}
            />
          </center>
          <Title level={5} style={{ margin: 0, textAlign: 'left', fontWeight: 'bolder' }}>
            Welcome to K3 System!
          </Title>
          <Title style={{ margin: 0, marginBottom: 20, textAlign: 'left', fontSize: 12, color: '#b4b4b4', fontWeight: 'normal' }}>
            Make your app management easy and fun
          </Title>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
            style={{
              marginBottom: 12,
              textAlign: 'left'
            }}
          >
            <Input
              className="input-primary"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            style={{
              marginBottom: 12,
              textAlign: 'left'
            }}
          >
            <Input
              type={isShow ? 'text' : 'password'}
              className="input-primary"
              placeholder="Password"
              suffix={<IconPassword />}
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item
                name="remember" valuePropName="checked" noStyle
              >
                <Checkbox style={{ fontSize: 12 }}>Remember me</Checkbox>
              </Form.Item>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Link to={'/'}>
              <Button block type="primary" htmlType="submit" className="btn-login">
                Login
              </Button>
            </Link>
          </Form.Item>
        </Form>

      </Flex>
      <Flex
        justify={'space-between'}
        align={'center'}
        style={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
        }}
      >
        <Image
          src={Images.Hat}
          preview={false}
          width={100}
          style={{
            marginLeft: 40
          }}
        />
        <Image
          src={Images.TrafficCone}
          preview={false}
          width={100}
          style={{
            marginLeft: -40,
          }}
        />
        <Text style={{ position: 'absolute', bottom: '0px', left: 0, right: 0, justifySelf: 'center', fontSize: 12, fontWeight: '600' }}>© 2025 All Reserved by K3 System</Text>
      </Flex>
    </>


  )
}

export default Login