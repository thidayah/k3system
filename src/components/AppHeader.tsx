import { type CSSProperties } from 'react'
import { Avatar, Badge, Button, Input, Layout } from "antd"
import { SearchOutlined, BellOutlined } from '@ant-design/icons'

import Images from "../utils/Images";

const headerStyle: CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f4f5fb',
  columnGap: 12
}

const inputSearchStyle: CSSProperties = {
  backgroundColor: '#f4f5fb',
  borderColor: '#f4f5fb',
  borderRadius: 99,
  marginLeft: -30,
}

const iconStyle: CSSProperties = {
  color: '#101112',
  fontWeight: 'bolder',
  fontSize: 20,
  paddingRight: 4
}

const AppHeader = () => {
  return (
    <Layout.Header
      style={headerStyle}
    >
      <Input
        placeholder="Search.."
        style={inputSearchStyle}
        prefix={<SearchOutlined style={iconStyle} />}
      />
      <Button
        type="text"
        shape="circle"
        icon={<BellOutlined />}
      />
      <Badge dot status="success" offset={[-5, 45]}>
        <Avatar src={Images.Avatar} style={{ cursor: 'pointer' }} />
      </Badge>
    </Layout.Header>
  )
}

export default AppHeader