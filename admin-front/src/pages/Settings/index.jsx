import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const Settings = () => {
  const [nightDelivery, setNightDelivery] = React.useState(false);
  const [startTime, setStartTime] = React.useState(dayjs().set('hour', 22).set('minute', 0));
  const [endTime, setEndTime] = React.useState(dayjs().set('hour', 6).set('minute', 0));
  const [radius, setRadius] = React.useState(10);
  const [currency, setCurrency] = React.useState('USD');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {/* Night Delivery Settings */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Night Delivery Settings
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={nightDelivery}
                  onChange={(e) => setNightDelivery(e.target.checked)}
                  color="primary"
                />
              }
              label="Enable Night Delivery"
            />
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TimePicker
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    disabled={!nightDelivery}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TimePicker
                    label="End Time"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    disabled={!nightDelivery}
                    sx={{ width: '100%' }}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>

        {/* Delivery Range Settings */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Delivery Range Settings
            </Typography>
            <TextField
              type="number"
              label="Delivery Radius (km)"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              fullWidth
              InputProps={{
                inputProps: { min: 1, max: 50 },
              }}
              helperText="Set the maximum delivery radius from restaurant location"
            />
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Payment Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Currency</InputLabel>
                  <Select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    label="Currency"
                  >
                    <MenuItem value="USD">USD ($)</MenuItem>
                    <MenuItem value="EUR">EUR (€)</MenuItem>
                    <MenuItem value="GBP">GBP (£)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Payment Methods
              </Typography>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Credit Card"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Cash on Delivery"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Digital Wallet"
              />
            </Box>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Notification Settings
            </Typography>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email Notifications"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Receive order updates and daily reports via email
            </Typography>
            <Divider sx={{ my: 2 }} />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Push Notifications"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Receive real-time updates for new orders and delivery status
            </Typography>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 200,
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default Settings;