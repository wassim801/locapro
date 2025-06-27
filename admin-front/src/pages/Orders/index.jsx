import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material';
import {
  Search,
  FilterList,
  MoreVert,
  TrendingUp,
  TrendingDown,
  LocalShipping,
  AccessTime,
} from '@mui/icons-material';

const orderStats = [
  {
    title: 'Total Orders',
    value: '2,456',
    change: '+12.5%',
    isPositive: true,
    icon: <TrendingUp />,
  },
  {
    title: 'Pending Orders',
    value: '45',
    change: '-2.4%',
    isPositive: false,
    icon: <AccessTime />,
  },
  {
    title: 'Active Deliveries',
    value: '24',
    change: '+6.8%',
    isPositive: true,
    icon: <LocalShipping />,
  },
  {
    title: 'Cancelled Orders',
    value: '12',
    change: '-1.2%',
    isPositive: true,
    icon: <TrendingDown />,
  },
];

const orders = [
  {
    id: '#ORD-0012',
    customer: 'John Doe',
    items: '2x Burger, 1x Fries',
    total: '$35.50',
    status: 'Delivered',
    date: '2024-01-20 14:30',
    driver: 'Mike Wilson',
  },
  {
    id: '#ORD-0013',
    customer: 'Jane Smith',
    items: '1x Pizza, 2x Coke',
    total: '$28.75',
    status: 'In Progress',
    date: '2024-01-20 15:15',
    driver: 'Sarah Johnson',
  },
  {
    id: '#ORD-0014',
    customer: 'Robert Brown',
    items: '3x Tacos, 1x Sprite',
    total: '$22.99',
    status: 'Pending',
    date: '2024-01-20 15:45',
    driver: 'Pending Assignment',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return 'success';
    case 'In Progress':
      return 'primary';
    case 'Pending':
      return 'warning';
    default:
      return 'default';
  }
};

const Orders = () => {
  return (
    <Box>
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {orderStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box>
                    <Typography color="text.secondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={stat.isPositive ? 'success.main' : 'error.main'}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      {stat.change}
                    </Typography>
                  </Box>
                  <IconButton
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'primary.main',
                      '&:hover': { bgcolor: 'primary.light' },
                    }}
                  >
                    {stat.icon}
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Orders Table */}
      <Card>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Typography variant="h6">Recent Orders</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                size="small"
                placeholder="Search orders..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="outlined"
                startIcon={<FilterList />}
                size="medium"
              >
                Filter
              </Button>
            </Box>
          </Box>

          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Items</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Driver</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order.id}
                    </TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        color={getStatusColor(order.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.driver}</TableCell>
                    <TableCell align="right">
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Orders;