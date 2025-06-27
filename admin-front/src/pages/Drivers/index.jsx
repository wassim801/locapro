import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Rating,
} from '@mui/material';
import {
  Edit,
  Delete,
  LocationOn,
  DirectionsBike,
  Star,
} from '@mui/icons-material';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const mockDrivers = [
  {
    id: 1,
    name: 'John Doe',
    status: 'available',
    rating: 4.5,
    totalDeliveries: 150,
    location: 'Downtown',
    workingHours: '22:00 - 06:00',
  },
  // Add more mock data as needed
];

const Drivers = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // Fetch drivers data
  const { data: drivers = mockDrivers, isLoading } = useQuery({
    queryKey: ['drivers'],
    // queryFn: () => driversAPI.getDrivers(),
  });

  const queryClient = useQueryClient();

  const updateDriverMutation = useMutation({
    // mutationFn: (data) => driversAPI.updateDriver(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
      handleCloseDialog();
    },
  });

  const deleteDriverMutation = useMutation({
    // mutationFn: (id) => driversAPI.deleteDriver(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  const handleEditClick = (driver) => {
    setSelectedDriver(driver);
    setIsEditDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedDriver(null);
    setIsEditDialogOpen(false);
  };

  const handleSaveDriver = (event) => {
    event.preventDefault();
    // Implement save logic
    updateDriverMutation.mutate(selectedDriver);
  };

  const handleDeleteDriver = (id) => {
    if (window.confirm('Are you sure you want to delete this driver?')) {
      deleteDriverMutation.mutate(id);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      available: 'success',
      busy: 'warning',
      offline: 'error',
    };
    return colors[status] || 'default';
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Drivers Management
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Drivers
              </Typography>
              <Typography variant="h3">{drivers.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Driver</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Total Deliveries</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Working Hours</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 2 }}>
                      <DirectionsBike />
                    </Avatar>
                    <Typography>{driver.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={driver.status}
                    color={getStatusColor(driver.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={driver.rating} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({driver.rating})
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{driver.totalDeliveries}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ mr: 1, fontSize: 'small' }} />
                    {driver.location}
                  </Box>
                </TableCell>
                <TableCell>{driver.workingHours}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleEditClick(driver)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteDriver(driver.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={isEditDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Edit Driver</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSaveDriver} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              value={selectedDriver?.name || ''}
              onChange={(e) =>
                setSelectedDriver({ ...selectedDriver, name: e.target.value })
              }
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              select
              label="Status"
              value={selectedDriver?.status || ''}
              onChange={(e) =>
                setSelectedDriver({ ...selectedDriver, status: e.target.value })
              }
              sx={{ mb: 2 }}
            >
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="busy">Busy</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Working Hours"
              value={selectedDriver?.workingHours || ''}
              onChange={(e) =>
                setSelectedDriver({
                  ...selectedDriver,
                  workingHours: e.target.value,
                })
              }
              sx={{ mb: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveDriver} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Drivers;