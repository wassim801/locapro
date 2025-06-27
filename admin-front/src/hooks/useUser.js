import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userAPI } from '../services/api';

export const useUser = () => {
  const queryClient = useQueryClient();

  const users = useQuery({
    queryKey: ['users'],
    queryFn: () => userAPI.getUsers(),
  });

  const userDetails = (id) =>
    useQuery({
      queryKey: ['user', id],
      queryFn: () => userAPI.getUser(id),
      enabled: !!id,
    });

  const userStats = useQuery({
    queryKey: ['userStats'],
    queryFn: () => userAPI.getUserStats(),
  });

  const createUser = useMutation({
    mutationFn: (data) => userAPI.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      queryClient.invalidateQueries(['userStats']);
    },
  });

  const updateUser = useMutation({
    mutationFn: ({ id, data }) => userAPI.updateUser(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['users']);
      queryClient.invalidateQueries(['user', id]);
      queryClient.invalidateQueries(['userStats']);
    },
  });

  const deleteUser = useMutation({
    mutationFn: (id) => userAPI.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      queryClient.invalidateQueries(['userStats']);
    },
  });

  // Helper functions for user statistics
  const getActiveUsers = () => {
    return users.data?.data.filter((user) => user.status === 'Active') || [];
  };

  const getUsersCount = () => {
    return users.data?.data.length || 0;
  };

  const getTopUsers = (limit = 5) => {
    return (
      [...(users.data?.data || [])]
        .sort((a, b) => b.orders - a.orders)
        .slice(0, limit) || []
    );
  };

  const getNewUsers = (days = 7) => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    return (
      users.data?.data.filter(
        (user) => new Date(user.createdAt) > cutoff
      ) || []
    );
  };

  return {
    users,
    userDetails,
    userStats,
    createUser,
    updateUser,
    deleteUser,
    getActiveUsers,
    getUsersCount,
    getTopUsers,
    getNewUsers,
  };
};

export default useUser;