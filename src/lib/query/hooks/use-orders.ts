// Example: Orders hooks with TanStack Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../keys';

// Mock API - replace with real API
const ordersApi = {
  list: async (params?: { page?: number; limit?: number; status?: string }) => {
    // Mock data with parameter handling
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const status = params?.status;

    const allOrders = [
      {
        id: '1',
        userId: '1',
        total: 100,
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        userId: '2',
        total: 200,
        status: 'completed',
        createdAt: new Date().toISOString(),
      },
      {
        id: '3',
        userId: '3',
        total: 150,
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
    ];

    // Filter by status if provided
    const filteredOrders = status
      ? allOrders.filter(order => order.status === status)
      : allOrders;

    // Simple pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const data = filteredOrders.slice(startIndex, endIndex);

    return {
      data,
      total: filteredOrders.length,
      page,
      limit,
      totalPages: Math.ceil(filteredOrders.length / limit),
    };
  },
  get: async (id: string) => {
    return {
      id,
      userId: '1',
      total: 100,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
  },
  create: async (data: {
    userId: string;
    items: Array<{ productId: string; quantity: number }>;
  }) => {
    return {
      id: Date.now().toString(),
      ...data,
      total: 100,
      status: 'pending',
    };
  },
  update: async (id: string, data: { status: string }) => {
    return { id, ...data };
  },
  delete: async (id: string) => {
    // Mock delete operation
    console.log(`Deleting order with id: ${id}`);
    return { success: true, deletedId: id };
  },
};

// Get orders list
export function useOrders(params?: {
  page?: number;
  limit?: number;
  status?: string;
}) {
  return useQuery({
    queryKey: queryKeys.orders.list(params || {}),
    queryFn: () => ordersApi.list(params),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
}

// Get single order
export function useOrder(orderId: string) {
  return useQuery({
    queryKey: queryKeys.orders.detail(orderId),
    queryFn: () => ordersApi.get(orderId),
    enabled: !!orderId,
  });
}

// Get orders by user
export function useOrdersByUser(userId: string) {
  return useQuery({
    queryKey: queryKeys.orders.byUser(userId),
    queryFn: () => ordersApi.list({ page: 1, limit: 10 }),
    enabled: !!userId,
  });
}

// Create order mutation
export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      userId: string;
      items: Array<{ productId: string; quantity: number }>;
    }) => ordersApi.create(data),
    onSuccess: newOrder => {
      queryClient.invalidateQueries({ queryKey: queryKeys.orders.lists() });
      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.byUser(newOrder.userId),
      });
    },
  });
}

// Update order mutation
export function useUpdateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { status: string } }) =>
      ordersApi.update(id, data),
    onSuccess: updatedOrder => {
      queryClient.setQueryData(
        queryKeys.orders.detail(updatedOrder.id),
        updatedOrder
      );
      queryClient.invalidateQueries({ queryKey: queryKeys.orders.lists() });
    },
  });
}

// Delete order mutation
export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: string) => ordersApi.delete(orderId),
    onSuccess: (_, orderId) => {
      queryClient.removeQueries({ queryKey: queryKeys.orders.detail(orderId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.orders.lists() });
    },
  });
}
