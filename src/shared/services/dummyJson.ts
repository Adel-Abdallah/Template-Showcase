export async function fetchProducts(endpoint: string = 'products', params?: Record<string, string | number>) {
    const baseUrl = 'https://dummyjson.com';
    // Ensure endpoint doesn't have leading slash if we append
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = new URL(`${baseUrl}${cleanEndpoint}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, String(value));
        });
    }

    try {
        const res = await fetch(url.toString(), { next: { revalidate: 3600 } }); // Cache for 1 hour
        if (!res.ok) {
            console.error(`Failed to fetch from ${url.toString()}: ${res.statusText}`);
            return null;
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
}

export async function fetchProductById(id: number) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) return null;
    return await res.json();
}

export async function searchProducts(query: string, params?: Record<string, string | number>) {
    return fetchProducts('products/search', { q: query, ...params });
}

export async function fetchCategories() {
    const res = await fetch('https://dummyjson.com/products/categories');
    if (!res.ok) return [];
    return await res.json();
}
