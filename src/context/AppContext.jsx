import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchFilters, setSearchFilters] = useState({
        location: '',
        startDate: null,
        endDate: null,
        guests: '',
        category: '',
        minPrice: null,
        maxPrice: null,
        minRating: null
    });

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('gotrav_cart');
        const savedFavorites = localStorage.getItem('gotrav_favorites');

        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Error loading cart from localStorage', e);
            }
        }

        if (savedFavorites) {
            try {
                setFavorites(JSON.parse(savedFavorites));
            } catch (e) {
                console.error('Error loading favorites from localStorage', e);
            }
        }
    }, []);

    // Save to localStorage whenever cart or favorites change
    useEffect(() => {
        localStorage.setItem('gotrav_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('gotrav_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToCart = (tour, quantity = 1, startDate = null, endDate = null, guests = '') => {
        const existingItem = cart.find(item => item.tour.id === tour.id);

        if (existingItem) {
            setCart(cart.map(item =>
                item.tour.id === tour.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            setCart([...cart, {
                tour,
                quantity,
                startDate,
                endDate,
                guests,
                addedAt: new Date().toISOString()
            }]);
        }
    };

    const removeFromCart = (tourId) => {
        setCart(cart.filter(item => item.tour.id !== tourId));
    };

    const updateCartQuantity = (tourId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(tourId);
        } else {
            setCart(cart.map(item =>
                item.tour.id === tourId
                    ? { ...item, quantity }
                    : item
            ));
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            return total + (item.tour.afterDiscount || item.tour.price) * item.quantity;
        }, 0);
    };

    const getCartItemCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const toggleFavorite = (tour) => {
        const isFavorite = favorites.some(fav => fav.id === tour.id);
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== tour.id));
        } else {
            setFavorites([...favorites, tour]);
        }
    };

    const isFavorite = (tourId) => {
        return favorites.some(fav => fav.id === tourId);
    };

    const updateSearchFilters = (newFilters) => {
        setSearchFilters(prev => ({ ...prev, ...newFilters }));
    };

    const clearSearchFilters = () => {
        setSearchFilters({
            location: '',
            startDate: null,
            endDate: null,
            guests: '',
            category: '',
            minPrice: null,
            maxPrice: null,
            minRating: null
        });
    };

    const value = {
        cart,
        favorites,
        searchFilters,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
        toggleFavorite,
        isFavorite,
        updateSearchFilters,
        clearSearchFilters
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

