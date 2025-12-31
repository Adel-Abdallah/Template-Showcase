import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
    id: number;
    name: string;
    price: string | number;
    image: string;
}

interface WishlistState {
    items: WishlistItem[];
    addItem: (item: WishlistItem) => void;
    removeItem: (id: number) => void;
    isInWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => set((state) => {
                if (state.items.find((i) => i.id === item.id)) return state;
                return { items: [...state.items, item] };
            }),
            removeItem: (id) => set((state) => ({
                items: state.items.filter((item) => item.id !== id),
            })),
            isInWishlist: (id) => get().items.some((item) => item.id === id),
        }),
        {
            name: 'wishlist-storage',
        }
    )
);
