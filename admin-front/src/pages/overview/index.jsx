import React from 'react';
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
} from '@mui/material';
import {
  Search,
  Add,
  MoreVert,
  AccessTime,
  LocationOn,
} from '@mui/icons-material';

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
    image: '/double.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: 15,
  },
  {
    id: 2,
    name: 'Double Burger',
    price: 5.59,
    rating: 5.0,
    reviews: '1k+',
    image: '/double.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: 15,
  },
  {
    id: 3,
    name: 'Beef Burger',
    price: 5.59,
    rating: 5.0,
    reviews: '1k+',
    image: '/dish.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: 15,
  },
];

const Overview = () => {
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
          placeholder="Search menu items..."
          variant="outlined"
          size="medium"
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
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          Add New Menu
        </Button>
      </Box>

      {/* Categories */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Category
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {categories.map((category) => (
          <Grid item xs={6} sm={4} md={2} key={category.id}>
            <Card
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {category.icon}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popular Dishes */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h6">Popular This Week</Typography>
        <Button color="primary">View all</Button>
      </Box>
      <Grid container spacing={3}>
        {popularDishes.map((dish) => (
          <Grid item xs={12} sm={6} md={4} key={dish.id}>
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
                image={dish.image}
                alt={dish.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {dish.name}
                  </Typography>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={dish.rating} readOnly size="small" />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    {dish.reviews} Reviews
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {dish.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6" color="primary.main">
                    ${dish.price}
                  </Typography>
                  <Chip
                    label={`${dish.discount}% OFF`}
                    color="error"
                    size="small"
                    sx={{ borderRadius: 1 }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overview;
