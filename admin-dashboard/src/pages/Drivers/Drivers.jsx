import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Button,
  LinearProgress,
} from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const performanceData = [
  {
    id: 'performance',
    data: [
      { x: 'Week 1', y: 60 },
      { x: 'Week 2', y: 70 },
      { x: 'Week 3', y: 80 },
      { x: 'Week 4', y: 50 },
      { x: 'Week 5', y: 90 },
      { x: 'Week 6', y: 70 },
      { x: 'Week 7', y: 85 },
      { x: 'Week 8', y: 90 },
    ],
  },
  {
    id: 'last-week',
    data: [
      { x: 'Week 1', y: 40 },
      { x: 'Week 2', y: 50 },
      { x: 'Week 3', y: 60 },
      { x: 'Week 4', y: 70 },
      { x: 'Week 5', y: 60 },
      { x: 'Week 6', y: 50 },
      { x: 'Week 7', y: 50 },
      { x: 'Week 8', y: 90 },
    ],
  },
];

const Drivers = () => {
  return (
    <Box sx={{ py: 3 }}>
      {/* Driver Profile */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
              <Avatar
                src="/static/avatar/driver.jpg"
                sx={{ width: 120, height: 120, margin: '0 auto 1rem' }}
              />
              <Typography variant="h5" gutterBottom>
                Jordan Nico
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <Typography variant="body1" sx={{ mr: 1 }}>
                  ⭐ 5.0
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1k+ Reviews
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Join June 2020
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Edit Profile
              </Button>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card sx={{ backgroundColor: '#f5f5f5' }}>
                    <CardContent>
                      <Typography variant="h6" color="success.main" gutterBottom>
                        932
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Finished
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ backgroundColor: '#f5f5f5' }}>
                    <CardContent>
                      <Typography variant="h6" color="primary.main" gutterBottom>
                        1,032
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Delivered
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ backgroundColor: '#f5f5f5' }}>
                    <CardContent>
                      <Typography variant="h6" color="error.main" gutterBottom>
                        102
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Canceled
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Today Earnings
                      </Typography>
                      <Typography variant="h4" color="success.main">
                        $11,240
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Today Stats
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Typography variant="body2" color="text.secondary">
                            Total Trip
                          </Typography>
                          <Typography variant="h6">15</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" color="text.secondary">
                            Total Distance
                          </Typography>
                          <Typography variant="h6">15 Km</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" color="text.secondary">
                            Total Time
                          </Typography>
                          <Typography variant="h6">90 Min</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Performance Stats */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Performance
              </Typography>
              <Typography variant="h3" sx={{ color: '#4caf50', textAlign: 'center', my: 2 }}>
                50%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#4caf50',
                    borderRadius: 5,
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Min. Performance
              </Typography>
              <Typography variant="h3" sx={{ color: '#2196f3', textAlign: 'center', my: 2 }}>
                80%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={80}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#2196f3',
                    borderRadius: 5,
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Avg. Performance
              </Typography>
              <Typography variant="h3" sx={{ color: '#ff9800', textAlign: 'center', my: 2 }}>
                75%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#ff9800',
                    borderRadius: 5,
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Performance Chart */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">Performance Statistic</Typography>
            <Button variant="outlined" size="small">This Month</Button>
          </Box>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <Box sx={{ mr: 4 }}>
              <Typography variant="body2" color="text.secondary">
                This Week
              </Typography>
              <Typography variant="h6" color="primary.main">
                75%
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Last Week
              </Typography>
              <Typography variant="h6" color="error.main">
                69%
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height: 300 }}>
            <ResponsiveLine
              data={performanceData}
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
              pointBorderWidth={2}
              pointBorderColor="#ffffff"
              colors={['#FF6B00', '#f44336']}
              enableArea
              areaOpacity={0.1}
              enablePoints
              pointColor="white"
              pointBorderColor={{ from: 'serieColor' }}
              enableGridX={false}
              enableSlices="x"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Drivers;