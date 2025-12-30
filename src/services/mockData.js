// Mock data service for frontend-only functionality

export const mockTours = [
    {
        id: 1,
        title: "Universal Studios Singapore",
        image: "",
        location: "Singapore",
        category: ["Tour & Cruise"],
        days: "1 day",
        price: 6000,
        afterDiscount: 5500,
        rating: 4.2,
        reviews: 125,
        description: "Experience the magic of Universal Studios Singapore with thrilling rides, live shows, and attractions based on your favorite movies. A full day of entertainment for the whole family.",
        highlights: [
            "7 themed zones with world-class attractions",
            "Live shows and street entertainment",
            "Dining options from quick bites to fine dining",
            "Express Pass available for shorter wait times"
        ],
        included: [
            "Park admission ticket",
            "Access to all rides and shows",
            "Map and guide"
        ],
        notIncluded: [
            "Food and beverages",
            "Express Pass",
            "Transportation"
        ],
        duration: "Full day (9:00 AM - 7:00 PM)",
        cancellation: "Free cancellation up to 24 hours before"
    },
    {
        id: 2,
        title: "River Wonders Singapore",
        image: "",
        location: "Singapore",
        category: ["Wildlife"],
        days: "1 day",
        price: 2800,
        afterDiscount: 2500,
        rating: 4.0,
        reviews: 89,
        description: "Explore the world's freshwater ecosystems and discover amazing aquatic animals from around the globe. Home to the famous giant pandas and manatees.",
        highlights: [
            "Giant Panda Forest",
            "Amazon Flooded Forest",
            "Mekong River",
            "Educational programs"
        ],
        included: [
            "Park admission",
            "All exhibits access",
            "Educational materials"
        ],
        notIncluded: [
            "Food and beverages",
            "Animal encounters",
            "Transportation"
        ],
        duration: "Half day (2-3 hours)",
        cancellation: "Free cancellation up to 24 hours before"
    },
    {
        id: 3,
        title: "Singapore Zoo Tickets",
        image: "",
        location: "Singapore",
        category: ["Escorted Tour"],
        days: "1 day",
        price: 3100,
        afterDiscount: 3000,
        rating: 4.5,
        reviews: 234,
        description: "Visit one of the world's best rainforest zoos. Experience close encounters with over 2,800 animals from 300 species in their naturalistic habitats.",
        highlights: [
            "Open-concept zoo",
            "Animal shows and feeding sessions",
            "Breakfast with orangutans",
            "Night Safari option available"
        ],
        included: [
            "Zoo admission",
            "All exhibits and shows",
            "Map and schedule"
        ],
        notIncluded: [
            "Food and beverages",
            "Special experiences",
            "Transportation"
        ],
        duration: "Full day (8:30 AM - 6:00 PM)",
        cancellation: "Free cancellation up to 24 hours before"
    },
    {
        id: 4,
        title: "Stonehenge Entry Tickets",
        image: "",
        location: "London",
        category: ["Escorted Tour"],
        days: "2 days",
        price: 4100,
        afterDiscount: 3800,
        rating: 4.5,
        reviews: 156,
        description: "Discover the mystery of Stonehenge, one of the world's most famous prehistoric monuments. Explore the visitor center and ancient stone circle.",
        highlights: [
            "Stone circle access",
            "Visitor center exhibition",
            "Audio guide included",
            "Shuttle bus to stones"
        ],
        included: [
            "Entry ticket",
            "Audio guide",
            "Shuttle bus service"
        ],
        notIncluded: [
            "Food and beverages",
            "Transportation from London",
            "Guided tours"
        ],
        duration: "2-3 hours",
        cancellation: "Free cancellation up to 48 hours before"
    },
    {
        id: 5,
        title: "Buckingham Palace",
        image: "",
        location: "London",
        category: ["Escorted Tour"],
        days: "1 day",
        price: 2000,
        afterDiscount: 1800,
        rating: 4.0,
        reviews: 312,
        description: "Visit the official residence of the British monarch. Explore the State Rooms, Royal Collection, and witness the Changing of the Guard ceremony.",
        highlights: [
            "State Rooms tour",
            "Royal Collection artworks",
            "Changing of the Guard",
            "Palace gardens"
        ],
        included: [
            "Palace entry",
            "Audio guide",
            "State Rooms access"
        ],
        notIncluded: [
            "Food and beverages",
            "Photography permit",
            "Transportation"
        ],
        duration: "2-3 hours",
        cancellation: "Free cancellation up to 48 hours before"
    },
    {
        id: 6,
        title: "SkyFeast at Sydney Tower",
        image: "",
        location: "Sydney",
        category: ["Escorted Tour"],
        days: "1 day",
        price: 4000,
        afterDiscount: 3500,
        rating: 4.8,
        reviews: 278,
        description: "Dine in the sky at Sydney Tower's revolving restaurant. Enjoy panoramic views of Sydney while savoring a delicious buffet meal.",
        highlights: [
            "360-degree revolving restaurant",
            "Panoramic city views",
            "Buffet dining",
            "Observation deck access"
        ],
        included: [
            "Restaurant access",
            "Buffet meal",
            "Observation deck",
            "Audio guide"
        ],
        notIncluded: [
            "Alcoholic beverages",
            "Transportation",
            "Additional activities"
        ],
        duration: "1.5-2 hours",
        cancellation: "Free cancellation up to 24 hours before"
    }
];

export const mockDestinations = [
    {
        id: 0,
        name: "New York, USA",
        tours: "5 activities",
        image: "/images/tour/tour-1.jpg",
        location: "New York",
        description: "The city that never sleeps offers endless attractions, from Broadway shows to iconic landmarks like the Statue of Liberty and Central Park.",
        toursList: [1, 2, 3]
    },
    {
        id: 1,
        name: "Paris, France",
        tours: "3 activities",
        image: "/images/tour/tour-2.jpg",
        location: "Paris",
        description: "The City of Light is home to the Eiffel Tower, Louvre Museum, and charming cafes. Experience romance and culture at every corner.",
        toursList: [4, 5]
    },
    {
        id: 2,
        name: "Delhi, India",
        tours: "7 activities",
        image: "/images/tour/tour-3.jpg",
        location: "Delhi",
        description: "A vibrant blend of ancient history and modern culture. Explore magnificent monuments, bustling markets, and delicious street food.",
        toursList: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 3,
        name: "Interlaken, Switzerland",
        tours: "3 activities",
        image: "/images/tour/tour-4.jpg",
        location: "Interlaken",
        description: "Nestled between two lakes and surrounded by mountains, Interlaken is a paradise for adventure seekers and nature lovers.",
        toursList: [1, 2, 3]
    },
    {
        id: 4,
        name: "Singapore",
        tours: "7 activities",
        image: "/images/tour/tour-5.jpg",
        location: "Singapore",
        description: "A modern metropolis with diverse cultures, world-class attractions, and incredible food scene. A perfect blend of tradition and innovation.",
        toursList: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 5,
        name: "Dubai, UAE",
        tours: "6 activities",
        image: "/images/tour/tour-6.jpg",
        location: "Dubai",
        description: "Experience luxury and innovation in Dubai. From the world's tallest building to man-made islands, Dubai never fails to amaze.",
        toursList: [1, 2, 3, 4, 5]
    },
    {
        id: 6,
        name: "Sydney, Australia",
        tours: "3 activities",
        image: "/images/tour/tour-7.jpg",
        location: "Sydney",
        description: "Australia's most iconic city features the Opera House, Harbour Bridge, beautiful beaches, and a laid-back lifestyle.",
        toursList: [6, 1, 2]
    },
    {
        id: 7,
        name: "London, United Kingdom",
        tours: "2 activities",
        image: "/images/tour/tour-8.jpg",
        location: "London",
        description: "Rich in history and culture, London offers royal palaces, world-class museums, West End shows, and charming neighborhoods.",
        toursList: [4, 5]
    }
];

// Helper functions
export const getTourById = (id) => {
    return mockTours.find(tour => tour.id === parseInt(id));
};

export const getToursByLocation = (location) => {
    return mockTours.filter(tour =>
        tour.location.toLowerCase().includes(location.toLowerCase())
    );
};

export const getToursByCategory = (category) => {
    return mockTours.filter(tour =>
        tour.category.some(cat => cat.toLowerCase().includes(category.toLowerCase()))
    );
};

export const searchTours = (query) => {
    const lowerQuery = query.toLowerCase();
    return mockTours.filter(tour =>
        tour.title.toLowerCase().includes(lowerQuery) ||
        tour.location.toLowerCase().includes(lowerQuery) ||
        tour.description.toLowerCase().includes(lowerQuery)
    );
};

export const filterTours = (filters) => {
    let results = [...mockTours];

    if (filters.location) {
        results = results.filter(tour =>
            tour.location.toLowerCase().includes(filters.location.toLowerCase())
        );
    }

    if (filters.category) {
        results = results.filter(tour =>
            tour.category.some(cat => cat.toLowerCase().includes(filters.category.toLowerCase()))
        );
    }

    if (filters.minPrice !== undefined) {
        results = results.filter(tour => tour.afterDiscount >= filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
        results = results.filter(tour => tour.afterDiscount <= filters.maxPrice);
    }

    if (filters.minRating) {
        results = results.filter(tour => tour.rating >= filters.minRating);
    }

    return results;
};

