import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { driversAPI } from '../services/api';

export const useDrivers = () => {
  const queryClient = useQueryClient();

  const drivers = useQuery({
    queryKey: ['drivers'],
    queryFn: () => driversAPI.getDrivers(),
  });

  const driverDetails = (id) =>
    useQuery({
      queryKey: ['driver', id],
      queryFn: () => driversAPI.getDriver(id),
      enabled: !!id,
    });

  const updateDriver = useMutation({
    mutationFn: (data) => driversAPI.updateDriver(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  const deleteDriver = useMutation({
    mutationFn: (id) => driversAPI.deleteDriver(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  const updateDriverStatus = useMutation({
    mutationFn: ({ id, status }) => driversAPI.updateDriverStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  const updateDriverLocation = useMutation({
    mutationFn: ({ id, location }) => driversAPI.updateDriverLocation(id, location),
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
    },
  });

  return {
    drivers,
    driverDetails,
    updateDriver,
    deleteDriver,
    updateDriverStatus,
    updateDriverLocation,
  };
};