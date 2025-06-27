import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import restaurantAPI from '../services/api/restaurant';

export const useRestaurant = () => {
  const queryClient = useQueryClient();

  const restaurants = useQuery({
    queryKey: ['restaurants'],
    queryFn: () => restaurantAPI.getRestaurants(),
  });

  const restaurantDetails = (id) =>
    useQuery({
      queryKey: ['restaurant', id],
      queryFn: () => restaurantAPI.getRestaurant(id),
      enabled: !!id,
    });

  const createRestaurant = useMutation({
    mutationFn: (data) => restaurantAPI.createRestaurant(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['restaurants']);
    },
  });

  const updateRestaurant = useMutation({
    mutationFn: ({ id, data }) => restaurantAPI.updateRestaurant(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['restaurants']);
      queryClient.invalidateQueries(['restaurant', id]);
    },
  });

  const deleteRestaurant = useMutation({
    mutationFn: (id) => restaurantAPI.deleteRestaurant(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['restaurants']);
    },
  });

  return {
    restaurants,
    restaurantDetails,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
  };
};

export default useRestaurant;