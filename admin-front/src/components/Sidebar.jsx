import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemButton,
  Collapse,
} from '@mui/material';
import {
  Dashboard,
  Restaurant,
  DirectionsBike,
  Apps,
  InsertChart,
  Build,
  Extension,
  Widgets,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  {
    text: 'Restaurant',
    icon: <Restaurant />,
    path: '/restaurant',
    subItems: [
      { text: 'Overview', path: '/restaurant' },
      { text: 'Menu', path: '/overview' },
      { text: 'Orders', path: '/orders' },
      { text: 'Reviews', path: '/reviews' },
      { text: 'Settings', path: '/settings' },
    ],
  },
  { text: 'Drivers', icon: <DirectionsBike />, path: '/drivers' },
];

const otherItems = [
  { text: 'Apps', icon: <Apps />, path: '/apps' },
  { text: 'Charts', icon: <InsertChart />, path: '/charts' },
  { text: 'Bootstrap', icon: <Build />, path: '/bootstrap' },
  { text: 'Plugins', icon: <Extension />, path: '/plugins' },
  { text: 'Widget', icon: <Widgets />, path: '/widget' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState('');

  const handleMenuClick = (item) => {
    if (item.subItems) {
      setOpenSubMenu(openSubMenu === item.path ? '' : item.path);
    } else {
      navigate(item.path);
    }
  };

  const isSelected = (path) => location.pathname === path;

  const renderMenuItem = (item, isSubItem = false) => (
    <ListItem
      key={item.path}
      disablePadding
      sx={{
        display: 'block',
        pl: isSubItem ? 4 : 0,
      }}
    >
      <ListItemButton
        onClick={() => handleMenuClick(item)}
        selected={isSelected(item.path)}
        sx={{
          minHeight: 48,
          px: 2.5,
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 107, 0, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(255, 107, 0, 0.12)',
            },
          },
        }}
      >
        {!isSubItem && (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 2,
              color: isSelected(item.path) ? 'primary.main' : 'inherit',
            }}
          >
            {item.icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={item.text}
          sx={{
            '& .MuiTypography-root': {
              fontWeight: isSelected(item.path) ? 600 : 400,
              color: isSelected(item.path) ? 'primary.main' : 'text.primary',
            },
          }}
        />
        {item.subItems && (
          <Box component="span" sx={{ ml: 'auto' }}>
            {openSubMenu === item.path ? <ExpandLess /> : <ExpandMore />}
          </Box>
        )}
      </ListItemButton>
      {item.subItems && (
        <Collapse in={openSubMenu === item.path} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subItems.map((subItem) => renderMenuItem(subItem, true))}
          </List>
        </Collapse>
      )}
    </ListItem>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
          Main Menu
        </Typography>
      </Box>
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => renderMenuItem(item))}
      </List>
      <Box sx={{ p: 3, mt: 2 }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Other
        </Typography>
      </Box>
      <List sx={{ px: 2 }}>
        {otherItems.map((item) => renderMenuItem(item))}
      </List>
    </Drawer>
  );
};

export default Sidebar;