import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import {
  CheckCircleOutline,
  LocalShipping,
  Cancel,
  AccessTime,
  MoreHoriz,
  TrendingUp,
  TrendingDown,
} from '@mui/icons-material';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';

const orderRateData = [
  {
    id: 'orders',
    data: Array.from({ length: 12 }, (_, i) => ({
      x: new Date(2023, i, 1).toLocaleString('default', { month: 'short' }),
      y: Math.floor(Math.random() * 50) + 30,
    })),
  },
];

const popularFoodData = [
  { id: 'Pizza', value: 35, color: '#FF6B00' },
  { id: 'Burger', value: 25, color: '#2196f3' },
  { id: 'Sushi', value: 20, color: '#4caf50' },
  { id: 'Pasta', value: 20, color: '#ff9800' },
];

const StatCard = ({ icon: Icon, title, value, color }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ color, mr: 1 }} />
        <Typography variant="subtitle1" color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <Box>
      {/* Income Summary */}
      <Card sx={{ mb: 4, backgroundColor: 'primary.light', color: 'white' }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ opacity: 0.9 }}>
                Total Income
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                $12,890.00
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TrendingUp sx={{ mr: 1 }} />
                    <Typography>Income</Typography>
                  </Box>
                  <Typography variant="h5">$4,345.00</Typography>
                  <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                    +15% from last month
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TrendingDown sx={{ mr: 1 }} />
                    <Typography>Expenses</Typography>
                  </Box>
                  <Typography variant="h5">$2,890.00</Typography>
                  <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                    -10% from last month
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                }}
              >
                Withdraw $
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={CheckCircleOutline}
            title="Total Order Complete"
            value="2,678"
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={LocalShipping}
            title="Total Order Delivered"
            value="1,234"
            color="#2196f3"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={Cancel}
            title="Total Order Canceled"
            value="123"
            color="#f44336"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={AccessTime}
            title="Order Pending"
            value="432"
            color="#ff9800"
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Order Rate</Typography>
                <IconButton size="small">
                  <MoreHoriz />
                </IconButton>
              </Box>
              <Box sx={{ height: 400 }}>
                <ResponsiveLine
                  data={orderRateData}
                  margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 0, max: 100 }}
                  curve="cardinal"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                  }}
                  pointSize={10}
                  pointColor="white"
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  colors={['#FF6B00']}
                  enableArea
                  areaOpacity={0.15}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Popular Food</Typography>
                <IconButton size="small">
                  <MoreHoriz />
                </IconButton>
              </Box>
              <Box sx={{ height: 400 }}>
                <ResponsivePie
                  data={popularFoodData}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.6}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ datum: 'data.color' }}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor="#ffffff"
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                    },
                  ]}
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