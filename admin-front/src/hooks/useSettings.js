import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsAPI } from '../services/api';

export const useSettings = () => {
  const queryClient = useQueryClient();

  const settings = useQuery({
    queryKey: ['settings'],
    queryFn: () => settingsAPI.getSettings(),
  });

  const updateSettings = useMutation({
    mutationFn: (data) => settingsAPI.updateSettings(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['settings']);
    },
  });

  // Helper functions for settings management
  const getNightDeliverySettings = () => {
    return settings.data?.data.nightDelivery || {
      enabled: false,
      startTime: '22:00',
      endTime: '06:00',
    };
  };

  const getDeliveryRadius = () => {
    return settings.data?.data.deliveryRadius || 10;
  };

  const getPaymentSettings = () => {
    return settings.data?.data.payment || {
      currency: 'USD',
      methods: {
        creditCard: true,
        cashOnDelivery: true,
        digitalWallet: true,
      },
    };
  };

  const getNotificationSettings = () => {
    return settings.data?.data.notifications || {
      email: true,
      push: true,
    };
  };

  return {
    settings,
    updateSettings,
    getNightDeliverySettings,
    getDeliveryRadius,
    getPaymentSettings,
    getNotificationSettings,
  };
};

export default useSettings;