// Example: Products hooks with TanStack Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../keys';

// Mock API - replace with real API
const productsApi = {
  list: async (params?: { page?: number; limit?: number; search?: string }) => {
    // Mock data with parameter handling
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const search = params?.search;

    const allProducts = [
      { id: '1', name: 'Product 1', price: 100, category: 'Electronics' },
      { id: '2', name: 'Product 2', price: 200, category: 'Clothing' },
      { id: '3', name: 'Product 3', price: 150, category: 'Electronics' },
      { id: '4', name: 'Product 4', price: 75, category: 'Books' },
    ];

    // Filter by search if provided
    const filteredProducts = search
      ? allProducts.filter(
          product =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
        )
      : allProducts;

    // Simple pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const data = filteredProducts.slice(startIndex, endIndex);

    return {
      data,
      total: filteredProducts.length,
      page,
      limit,
      totalPages: Math.ceil(filteredProducts.length / limit),
    };
  },
  get: async (id: string) => {
    return { id, name: `Product ${id}`, price: 100, category: 'Electronics' };
  },
  create: async (data: { name: string; price: number; category: string }) => {
    return { id: Date.now().toString(), ...data };
  },
  update: async (
    id: string,
    data: { name: string; price: number; category: string }
  ) => {
    return { id, ...data };
  },
  delete: async (id: string) => {
    // Mock delete operation
    console.log(`Deleting product with id: ${id}`);
    return { success: true, deletedId: id };
  },
};

// Get products list
export function useProducts(params?: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  return useQuery({
    queryKey: queryKeys.products.list(params || {}),
    queryFn: () => productsApi.list(params),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

// Get single product
export function useProduct(productId: string) {
  return useQuery({
    queryKey: queryKeys.products.detail(productId),
    queryFn: () => productsApi.get(productId),
    enabled: !!productId,
  });
}

// Create product mutation
export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { name: string; price: number; category: string }) =>
      productsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.products.lists() });
    },
  });
}

// Update product mutation
export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: { name: string; price: number; category: string };
    }) => productsApi.update(id, data),
    onSuccess: updatedProduct => {
      queryClient.setQueryData(
        queryKeys.products.detail(updatedProduct.id),
        updatedProduct
      );
      queryClient.invalidateQueries({ queryKey: queryKeys.products.lists() });
    },
  });
}

// Delete product mutation
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => productsApi.delete(productId),
    onSuccess: (_, productId) => {
      queryClient.removeQueries({
        queryKey: queryKeys.products.detail(productId),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.products.lists() });
    },
  });
}
