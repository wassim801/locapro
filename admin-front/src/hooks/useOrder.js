import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { orderAPI } from '../services/api';

export const useOrder = () => {
  const queryClient = useQueryClient();

  const orders = useQuery({
    queryKey: ['orders'],
    queryFn: () => orderAPI.getOrders(),
  });

  const orderDetails = (id) =>
    useQuery({
      queryKey: ['order', id],
      queryFn: () => orderAPI.getOrder(id),
      enabled: !!id,
    });

  const orderStats = useQuery({
    queryKey: ['orderStats'],
    queryFn: () => orderAPI.getOrderStats(),
  });

  const updateOrderStatus = useMutation({
    mutationFn: ({ id, status }) => orderAPI.updateOrderStatus(id, status),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['orders']);
      queryClient.invalidateQueries(['order', id]);
      queryClient.invalidateQueries(['orderStats']);
    },
  });

  // Helper functions for order statistics
  const getOrdersByStatus = (status) => {
    return orders.data?.data.filter((order) => order.status === status) || [];
  };

  const getOrdersCount = () => {
    return orders.data?.data.length || 0;
  };

  const getTotalRevenue = () => {
    return (
      orders.data?.data.reduce((total, order) => total + order.total, 0) || 0
    );
  };

  const getRecentOrders = (limit = 5) => {
    return (
      [...(orders.data?.data || [])]
        .sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, limit) || []
    );
  };

  return {
    orders,
    orderDetails,
    orderStats,
    updateOrderStatus,
    getOrdersByStatus,
    getOrdersCount,
    getTotalRevenue,
    getRecentOrders,
  };
};

export default useOrder;