import { useState, useEffect, type CSSProperties } from "react";
import { Image, Layout, Menu } from "antd"
import {
  PieChartFilled,
  SettingFilled,
  UserSwitchOutlined,
  HomeFilled,
  RightCircleOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";

import Images from "../utils/Images"

const { Sider } = Layout

const siderStyle: CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  backgroundColor: '#f4f5fb',
};

const logoStyle: CSSProperties = {
  marginTop: 24,
  marginBottom: 24,
  marginLeft: 28
}

const AppSider = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname;
  const [openKeys, setOpenKeys] = useState([]);

  type ImageKey = keyof typeof Images;
  const IconParent = (name: ImageKey) => <Image src={Images[name]} style={{ paddingRight: 8 }} />
  const IconChildren = <RightCircleOutlined style={{ fontSize: 10 }} />

  const items = [
    {
      label: 'Dashboard',
      key: '/',
      icon: currentPath === '/' ? <HomeFilled /> : IconParent('IcDashboard'), // Change icon active
    },
    {
      label: 'Manage Peralatan',
      key: '/manage-peralatan',
      icon: currentPath.startsWith('/manage-peralatan') ? <UserSwitchOutlined /> : IconParent('IcSettingSlash'),
      children: [
        {
          label: 'Peralatan',
          key: '/manage-peralatan/peralatan',
          icon: IconChildren,
        },
        {
          label: 'Inspeksi',
          key: '/manage-peralatan/inspeksi',
          icon: IconChildren,
        },
        {
          label: 'Kalibrasi',
          key: '/manage-peralatan/kalibrasi',
          icon: IconChildren,
        },
      ],
    },
    {
      label: 'Laporan',
      key: '/laporan',
      icon: currentPath.startsWith('/laporan') ? <PieChartFilled /> : IconParent('IcSchool'),
      children: [
        {
          label: 'Laporan 1',
          key: '/laporan/laporan1',
          icon: IconChildren,
        },
        {
          label: 'Laporan 2',
          key: '/laporan/laporan2',
          icon: IconChildren,
        },
      ],
    },
    {
      label: 'Keamanan',
      key: '/keamanan',
      icon: currentPath === '/keamanan' ? <SettingFilled /> : IconParent('IcSecurity'),
      children: [
        {
          label: 'Keamanan 1',
          key: '/keamanan/keamanan1',
          icon: IconChildren,
        },
        {
          label: 'Keamanan 2',
          key: '/keamanan/keamanan2',
          icon: IconChildren,
        },
      ],
    },
    {
      label: 'Notifikasi & Pengingat',
      key: '/notifikasi-pengingat',
      icon: currentPath === '/notifikasi-pengingat' ? <SettingFilled /> : IconParent('IcNotification'),
    },
    {
      label: 'Bantuan & Panduan',
      key: '/bantuan-panduan',
      icon: currentPath === '/bantuan-panduan' ? <SettingFilled /> : IconParent('IcBook'),
      children: [
        {
          label: 'Bantuan 1',
          key: '/bantuan-panduan/bantuan-panduan1',
          icon: IconChildren,
        },
        {
          label: 'Bantuan 2',
          key: '/bantuan-panduan/bantuan-panduan2',
          icon: IconChildren,
        },
      ],
    },
    {
      label: 'Pengaturan',
      key: '/pengaturan',
      icon: currentPath === '/pengaturan' ? <SettingFilled /> : IconParent('IcSetting'),
    },
    {
      label: 'User',
      key: '/user',
      icon: currentPath === '/user' ? <SettingFilled /> : IconParent('IcUser'),
      children: [
        {
          label: 'User 1',
          key: '/user/user1',
          icon: IconChildren,
        },
        {
          label: 'User 2',
          key: '/user/user2',
          icon: IconChildren,
        },
      ],
    },
    {
      label: 'Tautan',
      key: '/tautan',
      icon: currentPath === '/tautan' ? <SettingFilled /> : IconParent('IcFolder'),
    },
  ];

  useEffect(() => {
    const segments = currentPath.split('/');
    if (segments.length > 1) {
      setOpenKeys([`/${segments[1]}`]); // e.g. '/profile'
    }
  }, [currentPath]);

  const handleClick = (e) => {
    navigate(e.key);
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <Sider style={siderStyle} width={300}>
      <Image
        preview={false}
        src={Images.LogoDashboard}
        style={logoStyle}
      />
      <Menu
        className="custom-menu"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[currentPath]}
        onClick={handleClick}
        onOpenChange={handleOpenChange}
        items={items}
      />
    </Sider>
  )
}

export default AppSider