import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  Search,
  Add,
  MoreVert,
  AccessTime,
  LocationOn,
  Edit,
  Delete,
} from '@mui/icons-material';
import { useRestaurant } from '../../hooks/useRestaurant';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const categories = [
  { id: 1, name: 'Bakery', icon: '🥖' },
  { id: 2, name: 'Burger', icon: '🍔' },
  { id: 3, name: 'Beverage', icon: '☕' },
  { id: 4, name: 'Chicken', icon: '🍗' },
  { id: 5, name: 'Pizza', icon: '🍕' },
  { id: 6, name: 'Pizza', icon: '🍕' },
];

const popularDishes = [
  {
    id: 1,
    name: 'Fish Burger',
    price: 5.59,
    rating: 5.0,
    reviews: '1k+',
    image: '/dishes/fish-burger.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: 15,
  },
  {
    id: 2,
    name: 'Double Burger',
    price: 5.59,
    rating: 5.0,
    reviews: '1k+',
    image: '/dishes/double-burger.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: 15,
  },
  {
    id: 3,
    name: 'Beef Burger',
    price: 5.59,
    rating: 5.0,
    reviews: '1k+',
    image: '/dishes/beef-burger.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: 15,
  },
];

const Restaurant = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    phone: '',
    opening_time: dayjs().set('hour', 9).set('minute', 0),
    closing_time: dayjs().set('hour', 22).set('minute', 0),
    food_type: '',
    minimum_order: 0,
    delivery_fee: 0,
  });

  const {
    restaurants: { data: restaurantsList = [], isLoading } = {},
    createRestaurant: addRestaurant,
    updateRestaurant,
    deleteRestaurant,
  } = useRestaurant();

  const handleOpenDialog = (restaurant = null) => {
    if (restaurant) {
      setSelectedRestaurant(restaurant);
      setFormData({
        ...restaurant,
        opening_time: dayjs(restaurant.opening_time),
        closing_time: dayjs(restaurant.closing_time),
      });
    } else {
      setSelectedRestaurant(null);
      setFormData({
        name: '',
        description: '',
        address: '',
        phone: '',
        opening_time: dayjs().set('hour', 9).set('minute', 0),
        closing_time: dayjs().set('hour', 22).set('minute', 0),
        food_type: '',
        minimum_order: 0,
        delivery_fee: 0,
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRestaurant(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeChange = (time, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: time,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      opening_time: formData.opening_time.format('HH:mm:ss'),
      closing_time: formData.closing_time.format('HH:mm:ss'),
    };

    try {
      if (selectedRestaurant) {
        await updateRestaurant.mutateAsync({
          restaurant_id: selectedRestaurant.restaurant_id,
          ...data,
        });
      } else {
        await addRestaurant.mutateAsync(data);
      }
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving restaurant:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this restaurant?')) {
      try {
        await deleteRestaurant.mutateAsync(id);
      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }
    }
  };

  const filteredRestaurants = restaurantsList.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      {/* Restaurant Banner */}
      <Card sx={{ mb: 4, position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image="/banners/restaurant-banner.jpg"
          alt="Restaurant Banner"
          sx={{ filter: 'brightness(0.7)' }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            color: 'white',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          }}
        >
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Delicious Indian Cuisine
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1 }} />
              877 Mapleview Drive, St. Petersburg
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime sx={{ mr: 1 }} />
              Everyday 9AM - 6PM
            </Box>
          </Box>
        </Box>
      </Card>

      {/* Search and Add Menu */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <TextField
          placeholder="Search restaurants..."
          variant="outlined"
          size="medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={() => handleOpenDialog()}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          Add New Restaurant
        </Button>
      </Box>

      {/* Restaurants List */}
      <Grid container spacing={3}>
        {filteredRestaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.restaurant_id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={restaurant.image || '/placeholder-restaurant.jpg'}
                alt={restaurant.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography variant="h6" gutterBottom>
                    {restaurant.name}
                  </Typography>
                  <Box>
                    <IconButton size="small" onClick={() => handleOpenDialog(restaurant)}>
                      <Edit />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(restaurant.restaurant_id)}>
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {restaurant.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn sx={{ fontSize: 'small', mr: 0.5 }} color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.address}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTime sx={{ fontSize: 'small', mr: 0.5 }} color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.opening_time} - {restaurant.closing_time}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Restaurant Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedRestaurant ? 'Edit Restaurant' : 'Add New Restaurant'}
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Restaurant Name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address"
                  label="Address"
                  fullWidth
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="phone"
                  label="Phone"
                  fullWidth
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="food_type"
                  label="Food Type"
                  fullWidth
                  value={formData.food_type}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePicker
                  label="Opening Time"
                  value={formData.opening_time}
                  onChange={(newValue) => handleTimeChange(newValue, 'opening_time')}
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePicker
                  label="Closing Time"
                  value={formData.closing_time}
                  onChange={(newValue) => handleTimeChange(newValue, 'closing_time')}
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="minimum_order"
                  label="Minimum Order"
                  type="number"
                  fullWidth
                  value={formData.minimum_order}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="delivery_fee"
                  label="Delivery Fee"
                  type="number"
                  fullWidth
                  value={formData.delivery_fee}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {selectedRestaurant ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Restaurant;