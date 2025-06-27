import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  NotificationsOutlined,
  Settings,
  DarkMode,
  AccountCircle,
  ExitToApp,
} from '@mui/icons-material';

const Topbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setNotificationAnchorEl(null);
  };

  const notifications = [
    { id: 1, text: 'New order received', time: '5 minutes ago' },
    { id: 2, text: 'Driver status updated', time: '10 minutes ago' },
    { id: 3, text: 'New review posted', time: '1 hour ago' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="large" color="default">
            <DarkMode />
          </IconButton>

          <IconButton
            size="large"
            color="default"
            onClick={handleNotificationMenuOpen}
          >
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsOutlined />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notificationAnchorEl}
            open={Boolean(notificationAnchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { width: 320, maxHeight: 400 },
            }}
          >
            <Typography variant="subtitle1" sx={{ p: 2, fontWeight: 600 }}>
              Notifications
            </Typography>
            <Divider />
            {notifications.map((notification) => (
              <MenuItem key={notification.id} onClick={handleMenuClose}>
                <Box sx={{ py: 1 }}>
                  <Typography variant="body1">{notification.text}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {notification.time}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>

          <IconButton 
            size="large" 
            color="default" 
            onClick={() => navigate('/settings')}
          >
            <Settings />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              ml: 2,
              cursor: 'pointer',
            }}
            onClick={handleProfileMenuOpen}
          >
            <Avatar
              alt="Admin User"
              src="/avatars/admin.jpg"
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ color: 'text.primary', fontWeight: 600, lineHeight: 1.2 }}
              >
                Admin User
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', lineHeight: 1 }}
              >
                Administrator
              </Typography>
            </Box>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { width: 200 },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <AccountCircle sx={{ mr: 2 }} /> Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Settings sx={{ mr: 2 }} /> Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              <ExitToApp sx={{ mr: 2 }} onClick={() => navigate('/login')} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;