import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  CardMedia,
  Rating,
  Chip,
} from '@mui/material';
import { Search, Add, MoreVert } from '@mui/icons-material';

const categories = [
  { id: 1, name: 'Bakery', icon: '🥖' },
  { id: 2, name: 'Burger', icon: '🍔' },
  { id: 3, name: 'Beverage', icon: '☕' },
  { id: 4, name: 'Chicken', icon: '🍗' },
  { id: 5, name: 'Pizza', icon: '🍕' },
];

const popularDishes = [
  {
    id: 1,
    name: 'Fish Burger',
    price: 5.59,
    rating: 5.0,
    reviews: 1000,
    image: '/static/dishes/fish-burger.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    id: 2,
    name: 'Double Burger',
    price: 5.59,
    rating: 5.0,
    reviews: 1000,
    image: '/static/dishes/double-burger.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    id: 3,
    name: 'Beef Burger',
    price: 5.59,
    rating: 5.0,
    reviews: 1000,
    image: '/static/dishes/beef-burger.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

const Restaurant = () => {
  return (
    <Box sx={{ py: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="/static/restaurant-banner.jpg"
            alt="Restaurant Banner"
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Delicious Indian Cuisine
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              877 Mapleview Drive, St. Petersburg
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              Opening Hours: Everyday 9AM - 6PM
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Search and Add Menu */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <TextField
          placeholder="Search here..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
          }}
          sx={{ width: 300 }}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            backgroundColor: '#FF6B00',
            '&:hover': { backgroundColor: '#FF8533' },
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
                '&:hover': { backgroundColor: '#f5f5f5' },
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {category.icon}
                </Typography>
                <Typography variant="body2">{category.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popular Dishes */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Popular This Week</Typography>
        <Button color="primary">View all</Button>
      </Box>
      <Grid container spacing={3}>
        {popularDishes.map((dish) => (
          <Grid item xs={12} sm={6} md={4} key={dish.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={dish.image}
                alt={dish.name}
              />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {dish.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={dish.rating} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        {dish.reviews} User Reviews
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {dish.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ${dish.price}
                  </Typography>
                  <Chip
                    label="15% OFF"
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

export default Restaurant;