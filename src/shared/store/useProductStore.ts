import { create } from 'zustand';

interface Product {
    id: number;
    name: string;
    price: string | number;
    image: string;
    description?: string;
    rating?: number;
    category?: string;
}

interface ProductState {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
    isLoading: boolean;
    error: string | null;
    setProducts: (products: Product[], total: number) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    setPagination: (skip: number, limit: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    total: 0,
    skip: 0,
    limit: 10,
    isLoading: false,
    error: null,
    setProducts: (products, total) => set({ products, total }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    setPagination: (skip, limit) => set({ skip, limit }),
}));
