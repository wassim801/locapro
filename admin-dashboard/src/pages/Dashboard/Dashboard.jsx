import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  IconButton,
  LinearProgress,
} from '@mui/material';
import {
  CheckCircleOutline,
  LocalShipping,
  Cancel,
  AccessTime,
  MoreHoriz,
} from '@mui/icons-material';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';

// Mock data for charts
const orderRateData = [
  {
    id: 'orders',
    data: [
      { x: 'Jan', y: 45 },
      { x: 'Feb', y: 55 },
      { x: 'Mar', y: 65 },
      { x: 'Apr', y: 50 },
      { x: 'May', y: 70 },
      { x: 'Jun', y: 80 },
    ],
  },
];

const popularFoodData = [
  { id: 'Pizza', value: 35 },
  { id: 'Burger', value: 25 },
  { id: 'Sushi', value: 20 },
  { id: 'Pasta', value: 20 },
];

const Dashboard = () => {
  return (
    <Box sx={{ py: 3 }}>
      {/* Income Summary */}
      <Card sx={{ mb: 4, backgroundColor: '#FFF8F3' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Total Income
              </Typography>
              <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
                $12,890.00
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography color="success.main" variant="body2">
                    Income +15%
                  </Typography>
                  <Typography variant="h6">$4345.00</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="error.main" variant="body2">
                    Expense -10%
                  </Typography>
                  <Typography variant="h6">$2890.00</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                sx={{
                  height: 'fit-content',
                  backgroundColor: '#FF6B00',
                  '&:hover': { backgroundColor: '#FF8533' },
                }}
              >
                Withdraw $
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleOutline color="success" />
                <Typography variant="subtitle1" sx={{ ml: 1 }}>
                  Total Order Complete
                </Typography>
              </Box>
              <Typography variant="h4">2,678</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalShipping color="primary" />
                <Typography variant="subtitle1" sx={{ ml: 1 }}>
                  Total Order Delivered
                </Typography>
              </Box>
              <Typography variant="h4">1,234</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Cancel color="error" />
                <Typography variant="subtitle1" sx={{ ml: 1 }}>
                  Total Order Canceled
                </Typography>
              </Box>
              <Typography variant="h4">123</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTime color="warning" />
                <Typography variant="subtitle1" sx={{ ml: 1 }}>
                  Order Pending
                </Typography>
              </Box>
              <Typography variant="h4">432</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Order Rate</Typography>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </Box>
              <Box sx={{ height: 300 }}>
                <ResponsiveLine
                  data={orderRateData}
                  margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 0, max: 100 }}
                  curve="cardinal"
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                  }}
                  pointSize={10}
                  pointColor="#FF6B00"
                  pointBorderWidth={2}
                  pointBorderColor="#ffffff"
                  colors={['#FF6B00']}
                  enableArea
                  areaOpacity={0.1}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Popular Food</Typography>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </Box>
              <Box sx={{ height: 300 }}>
                <ResponsivePie
                  data={popularFoodData}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  innerRadius={0.6}
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={['#FF6B00', '#2196f3', '#4caf50', '#ff9800']}
                  borderWidth={1}
                  borderColor="#ffffff"
                  enableArcLinkLabels={false}
                  arcLabelsSkipAngle={10}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;