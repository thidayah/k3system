import React, { ReactNode } from 'react';
import { Layout, theme, Typography } from "antd"
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import AppSider from "./AppSider"

interface TemplateProps {
  title?: string;
  isLayout?: boolean;
  children: ReactNode;
}

const Template = ({ title, isLayout = true, children }: TemplateProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const containerStyle = {
    // padding: 24,
    // textAlign: 'center',
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
    minHeight: '80vh'
  }

  return (
    <Layout hasSider style={{ margin: 0 }}>
      <AppSider />
      <Layout>
        <AppHeader />
        {isLayout ?
          <Layout.Content style={{ margin: '12px 16px 0', overflow: 'initial' }}>
            <Typography.Title level={4} style={{ fontWeight: 'bolder' }}>
              {title}
            </Typography.Title>
            <div
              style={containerStyle}
            >
              {children}
              {/* {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          } */}
            </div>
          </Layout.Content>
          :
          children
        }
        <AppFooter />
      </Layout>
    </Layout>
  )
}

export default Template