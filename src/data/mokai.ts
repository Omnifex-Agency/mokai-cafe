export const MOKAI_DATA = {
    name: "Mokai Cafe",
    location: {
        address: "Chapel Rd, Ranwar, Bandra West, Mumbai, Maharashtra 400050",
        googleMapLink: "https://goo.gl/maps/example", // Placeholder, will try to find real one if user clicks
        coordinates: { lat: 19.0544, lng: 72.8286 } // Approx Bandra West
    },
    contact: {
        phone: "+91 9876543210", // Placeholder
        email: "hello@mokaicafe.com",
        instagram: "@mokai.bandra" // Placeholder handle
    },
    hours: [
        { day: "Mon-Sun", time: "8:00 AM - 11:00 PM" }
    ],
    menu: {
        "All Day Breakfast": {
            "Toasts": [
                { name: "Edamame Avo Toast", price: "₹550", description: "Truffle edamame hummus, chunky guacamole & furikake on crispy quinoa sourdough (Chilli fried egg +75)", tags: ["Vegan"] },
                { name: "Chilli Fried Egg Avo Toast", price: "₹550", description: "Sliced avocado, fried egg with chilli oil on crispy quinoa sourdough", tags: [] },
                { name: "Kafir Lime Avo Toast", price: "₹550", description: "Kafir lime & cream cheese, sliced avocado, sundried tomatoes on quinoa sourdough (Chilli fried egg +75)", tags: ["New"] },
                { name: "Truffle Mushroom Toast", price: "₹450", description: "Truffle mushroom pâté with fried shimeji mushrooms & toasted sesame on quinoa sourdough", tags: ["New"] },
            ],
            "Egg Dishes": [
                { name: "Congee", price: "₹375", description: "Savoury rice porridge with miso butter, shiitake & shimeji mushrooms (Poached egg +75)", tags: [] },
                { name: "Chawanmushi", price: "₹375", description: "Japanese steamed silky egg custard with light soy, button & shimeji mushrooms", tags: [] },
                { name: "Not So Turkish Eggs", price: "₹520", description: "82°C poached eggs, creamy garlic tofu, chilli oil, quinoa sourdough (Extra sourdough +75)", tags: [] },
                { name: "Miso Eggs Benedict", price: "₹480", description: "82°C poached eggs, airy miso hollandaise, ginger scallion sauce (Weekends only. Add salmon +150)", tags: ["Weekend"] },
            ],
            "Omelettes": [
                { name: "Classic Omelette", price: "₹360", description: "Served with house salad & quinoa sourdough", tags: [] },
                { name: "Egg Whites Omelette", price: "₹380", description: "Served with house salad & quinoa sourdough", tags: ["Healthy"] },
                { name: "Caramelized Onions Omelette", price: "₹390", description: "Served with house salad & quinoa sourdough", tags: [] },
                { name: "Thai Spice Omelette", price: "₹380", description: "Served with house salad & quinoa sourdough", tags: ["Spicy"] },
                { name: "Truffle Mushrooms Omelette", price: "₹450", description: "Served with house salad & quinoa sourdough", tags: [] },
                { name: "Tornado Style Omelette", price: "₹375", description: "Japanese tornado omelette with chilli oil & sesame, quinoa sourdough, house salad", tags: ["Bestseller"] },
            ],
            "Scrambled Eggs": [
                { name: "Classic Scrambled", price: "₹350", description: "On quinoa sourdough", tags: [] },
                { name: "Sliced Avo Scrambled", price: "₹495", description: "On quinoa sourdough", tags: [] },
                { name: "Truffle & Parmesan Scrambled", price: "₹475", description: "On quinoa sourdough", tags: [] },
                { name: "Miso Tomato Jam Scrambled", price: "₹395", description: "Miso tomato jam, Spinach & Edamame on quinoa sourdough", tags: [] },
            ],
            "Croissants": [
                { name: "Avocado Croissant", price: "₹550", description: "Wasabi cream cheese, arugula, cucumber, sundried tomato & capers", tags: [] },
                { name: "Smoked Salmon Croissant", price: "₹595", description: "Wasabi cream cheese, arugula, cucumber, sundried tomato & capers (20 mins prep)", tags: [] },
                { name: "Scallion Cream Cheese Croissant", price: "₹395", description: "Scallion cream cheese with crispy Hong Kong chilli oil", tags: [] },
            ],
            "Hot Plates": [
                { name: "Asian Shakshuka", price: "₹475", description: "Miso tomato jam, 2 poached eggs, ginger scallion & jalapeños. Served with quinoa sourdough.", tags: [] },
                { name: "MOKAI’s Okonomiyaki", price: "₹375", description: "Japanese savoury pancake with mixed vegetables, eggs, kewpie mayo", tags: [] },
            ],
            "Sweet Breakfast": [
                { name: "Singapore Kaya Butter French Toast", price: "₹350", description: "Contains egg", tags: [] },
                { name: "Maple French Toast", price: "₹350", description: "Contains egg", tags: [] },
                { name: "Valrhona Chocolate French Toast", price: "₹425", description: "Contains egg", tags: [] },
                { name: "Tiramisu French Toast", price: "₹450", description: "Contains egg", tags: [] },
                { name: "Honey Butter Toast", price: "₹325", description: "Organic honey, butter, toasted shokupan milk bread (20 mins prep)", tags: [] },
                { name: "Apple & Cinnamon Porridge", price: "₹475", description: "Oat porridge, granola, fresh fruit & nut butter", tags: ["New", "GF", "RSF"] },
                { name: "The Berry Good Açaí", price: "₹620", description: "Açaí, blueberry, mango, banana, dates, house granola, fruit & seeds", tags: ["GF", "DF", "RSF"] },
                { name: "Cacao Smoothie Bowl", price: "₹620", description: "Raw cacao, almonds, banana, dates, chia, house granola, fruit & seeds", tags: ["GF", "DF", "RSF"] },
                { name: "Greek Yoghurt Bowl", price: "₹420", description: "Greek yoghurt, fresh fruit, granola & nut butter", tags: ["GF", "RSF"] },
            ],
        },
        "Lunch & Dinner (12pm+)": {
            "Salad": [
                { name: "Orange Quinoa Salad", price: "₹450", description: "Quinoa, lettuce, carrot, cucumber, orange, cherry tomatoes, bean sprouts, kafir lime vinaigrette, super seeds (Served 12pm onwards)", tags: ["New", "DF", "PB"] },
                { name: "The Panda", price: "₹475", description: "Mix lettuce, cucumber, bean sprouts, cherry tomatoes, soba noodles, ginger soy dressing (Add chicken +120)", tags: ["New"] },
            ],
            "Appetizers": [
                { name: "Roasted Mushroom Truffle Dip", price: "₹395", description: "With sourdough crackers", tags: ["New"] },
                { name: "Togarashi Fries with Truffle Aioli", price: "₹350", description: "Gluten free", tags: ["GF"] },
                { name: "Bang Bang Prawns", price: "₹525", description: "Panko fried prawns, fire-y dip", tags: [] },
                { name: "Corn & Asparagus Wonton", price: "₹375", description: "Peanut Satay Sauce Wonton", tags: [] },
                { name: "Chicken Wonton", price: "₹395", description: "Peanut Satay Sauce Wonton", tags: [] },
                { name: "Edamame Hummus", price: "₹395", description: "With baked crackers", tags: ["DF", "PB"] },
                { name: "Gochujang Glazed Chicken Lollies", price: "₹450", description: "", tags: [] },
                { name: "Chicken Steamed Wontons", price: "₹350", description: "Hong Kong Street Style", tags: [] },
                { name: "Mushroom Steamed Wontons", price: "₹350", description: "Hong Kong Street Style", tags: ["DF", "PB"] },
                { name: "Water Chestnut Steamed Wontons", price: "₹325", description: "Hong Kong Street Style", tags: ["DF", "PB"] },
            ],
            "Slurps (Noodles)": [
                { name: "Chilli Garlic Noodles", price: "₹525", description: "Alkaline noodles, chilli crisp, veggies, golden garlic. (Add chicken +120, GF Noodles +95)", tags: [] },
                { name: "Peanut & Chilli Jam Noodles", price: "₹475", description: "Gluten free, Plant based", tags: ["DF", "PB"] },
                { name: "Laksa Curry Bowl", price: "₹625", description: "Tofu 625 / Chicken 650 / Prawn 695", tags: ["New"] },
                { name: "Mokai’s Khow Suey", price: "₹625", description: "Tofu 625 / Chicken 650 / Prawn 695", tags: [] },
            ],
            "Sandos": [
                { name: "3 Mushroom Truffle Brie", price: "₹450", description: "Mushrooms, truffle & brie in shokupan bread", tags: ["Veg"] },
                { name: "Hunny Kimchi Grilled", price: "₹475", description: "Sweet-spicy honey, fermented kimchi, cheddar, quinoa sourdough", tags: ["Veg"] },
                { name: "Spicy Avo", price: "₹550", description: "Scallion sauce, chunky guacamole, parmesan & pickled chillies on quinoa sourdough", tags: ["New", "Veg"] },
                { name: "Tempeh Kra Pao", price: "₹525", description: "Thai basil, red chillies, lettuce, tomato, cucumber, cream cheese in focaccia", tags: ["New", "Veg"] },
                { name: "Tofu Beetroot", price: "₹495", description: "Smoked tofu & beetroot patty, lettuce, jalapeños, coriander, wasabi", tags: ["Veg"] },
                { name: "Basil 3 Cheese", price: "₹450", description: "Cheddar, parmesan, mozzarella, Thai basil", tags: ["Veg"] },
                { name: "Mango Hokkaido Cream Sando", price: "₹450", description: "Fresh mango & Hokkaido cream in milk bread", tags: ["Veg", "Sweet"] },
                { name: "Katsu Chicken", price: "₹520", description: "Panko fried chicken, house katsu sauce, slaw, shokupan bread", tags: ["Non-Veg", "Bestseller"] },
                { name: "Chicken Kra Pao", price: "₹575", description: "Chicken stir-fried with Thai red chillies & basil, cream cheese in focaccia", tags: ["New", "Non-Veg"] },
                { name: "Grilled Chicken", price: "₹520", description: "Japanese BBQ chicken, onion, tomato, lettuce, coriander, wasabi, sourdough", tags: ["Non-Veg"] },
                { name: "Hunny Kimchi Chicken Grilled", price: "₹550", description: "Honey, kimchi, chicken, cheddar in quinoa sourdough", tags: ["New", "Non-Veg"] },
            ],
        },
        "Coffee & Desserts": {
            "Hot Coffee": [
                { name: "Milk Options / Bean Choice", price: "Info", description: "Lactose-free/Oat/Coconut +80, Almond +100. Beans: CMCR’s 22 Saint Martin (+50) or MOKAI’s House Blend", tags: [] },
                { name: "Espresso", price: "₹170", description: "", tags: [] },
                { name: "Macchiato", price: "₹180", description: "", tags: [] },
                { name: "Americano", price: "₹220", description: "", tags: [] },
                { name: "Cortado", price: "₹250", description: "", tags: [] },
                { name: "Cappuccino", price: "₹250", description: "", tags: [] },
                { name: "Café Latte", price: "₹250", description: "", tags: [] },
                { name: "Piccolo", price: "₹180", description: "", tags: [] },
                { name: "Flat White", price: "₹250", description: "", tags: [] },
                { name: "Mocha (White/Dark)", price: "₹280", description: "", tags: [] },
                { name: "Aero-Cano", price: "₹230", description: "", tags: [] },
                { name: "Peach Mocha", price: "₹320", description: "", tags: [] },
                { name: "Vietnamese Latte", price: "₹270", description: "", tags: [] },
                { name: "Honey Cortado", price: "₹250", description: "", tags: [] },
                { name: "Roasted Almond Latte", price: "₹320", description: "", tags: [] },
                { name: "Hazelnut Latte", price: "₹320", description: "", tags: [] },
            ],
            "Special Hot Lattes": [
                { name: "Activated Charcoal Latte", price: "₹250", description: "Activated charcoal, double espresso, steamed milk, honey", tags: [] },
                { name: "Mumma’s Turmeric Latte", price: "₹250", description: "Turmeric, honey, cinnamon, cardamom", tags: [] },
            ],
            "Iced Coffee": [
                { name: "Milk Options", price: "Info", description: "Lactose-free/Oat/Coconut +80, Almond +100", tags: [] },
                { name: "Iced Americano", price: "₹220", description: "", tags: [] },
                { name: "Iced Cortado", price: "₹230", description: "", tags: [] },
                { name: "Iced Cappuccino", price: "₹250", description: "", tags: [] },
                { name: "Iced Latte", price: "₹250", description: "", tags: [] },
                { name: "House Cold Coffee", price: "₹290", description: "", tags: [] },
                { name: "Iced Mocha (White/Dark)", price: "₹300", description: "", tags: [] },
                { name: "Iced Vietnamese", price: "₹290", description: "", tags: [] },
                { name: "Cold Foam Americano", price: "₹230", description: "", tags: [] },
                { name: "Iced Tiger Milk Coffee", price: "₹320", description: "", tags: [] },
                { name: "Tiramisu Iced Latte", price: "₹330", description: "", tags: [] },
                { name: "Gula Melaka Iced Latte", price: "₹290", description: "Malaysian palm sugar", tags: ["Bestseller"] },
                { name: "Dirty Chai Latte", price: "₹320", description: "", tags: [] },
            ],
            "Cold Brew": [
                { name: "Classic Cold Brew", price: "₹280", description: "", tags: [] },
                { name: "Kyoto Cold Brew", price: "₹300", description: "Slow drip", tags: ["Special"] },
                { name: "Orange Cold Brew", price: "₹320", description: "", tags: [] },
                { name: "Almond Cold Brew", price: "₹320", description: "", tags: [] },
                { name: "Coconut Moka Cold Brew", price: "₹330", description: "", tags: [] },
                { name: "Sparkling Cold Brew", price: "₹300", description: "", tags: [] },
            ],
            "Manual Brew": [
                { name: "Bean Choice", price: "Info", description: "CMCR’s Aricha & Heza (+50) or MOKAI’s Manual Brews (1, 2 & 3)", tags: [] },
                { name: "French Press", price: "₹300", description: "", tags: [] },
                { name: "Clever Dripper", price: "₹300", description: "", tags: [] },
                { name: "Chemex / Iced Chemex", price: "₹300", description: "", tags: [] },
                { name: "Cinnamon Chemex", price: "₹320", description: "", tags: [] },
            ],
            "Cold Drip": [
                { name: "14 Hour Cold Drip", price: "₹300", description: "", tags: [] },
            ],
            "Fresh Juice": [
                { name: "Orange", price: "₹300", description: "", tags: [] },
                { name: "Pineapple", price: "₹280", description: "", tags: [] },
                { name: "Green Apple", price: "₹300", description: "", tags: [] },
                { name: "Watermelon", price: "₹280", description: "", tags: [] },
                { name: "Fresh Coconut Water", price: "₹250", description: "", tags: [] },
                { name: "Pineapple, Turmeric & Ginger", price: "₹320", description: "", tags: [] },
                { name: "Pomegranate, Orange & Mint", price: "₹350", description: "", tags: [] },
                { name: "Apple, Beetroot, Carrot & Ginger", price: "₹300", description: "", tags: [] },
                { name: "Kale, Fennel, Thyme, Green Apple & Pineapple", price: "₹320", description: "", tags: [] },
            ],
            "Smoothies": [
                { name: "Espresso Cacao", price: "₹350", description: "Cocoa, cold brew, banana, dates", tags: [] },
                { name: "Banana Cinnamon Oat", price: "₹350", description: "Oats, banana, dates, cinnamon & almond milk", tags: [] },
                { name: "Mango Blueberry", price: "₹390", description: "Mango, blueberry, dates", tags: [] },
            ],
            "Hot Chocolate": [
                { name: "Options", price: "Info", description: "Milk: Lactose-free/Oat/Coconut +80, Almond +100. Marshmallow +70", tags: [] },
                { name: "Classic 55%", price: "₹300", description: "", tags: [] },
                { name: "Dark 70%", price: "₹350", description: "", tags: [] },
            ],
            "Matcha Bar": [
                { name: "Milk Options", price: "Info", description: "Lactose-free/Oat/Coconut +80, Almond +100", tags: [] },
                { name: "Matcha Latte", price: "₹300", description: "", tags: [] },
                { name: "Iced Matcha Latte", price: "₹350", description: "", tags: [] },
                { name: "Vanilla Matcha", price: "₹310", description: "", tags: [] },
                { name: "Iced Vanilla Matcha Latte", price: "₹350", description: "", tags: [] },
                { name: "Blueberry Matcha", price: "₹320", description: "", tags: [] },
            ],
            "Shots": [
                { name: "Ginger, Lime & Honey", price: "₹70", description: "", tags: [] },
                { name: "Aloe Vera", price: "₹70", description: "", tags: [] },
                { name: "Wheatgrass", price: "₹70", description: "", tags: [] },
            ],
            "Coolers": [
                { name: "Pandan Coconut Cooler", price: "₹250", description: "Sweetened with organic honey", tags: [] },
                { name: "Jasmine Iced Tea", price: "₹230", description: "Sweetened with organic honey", tags: [] },
            ],
            "Tea": [
                { name: "Masala Chai", price: "₹250", description: "", tags: [] },
                { name: "Jasmine Green Tea", price: "₹200", description: "", tags: [] },
                { name: "Chamomile Green Tea", price: "₹200", description: "", tags: [] },
                { name: "Lemongrass Ginger Tea", price: "₹200", description: "", tags: [] },
            ],
            "Kombucha": [
                { name: "Classic Kombucha", price: "₹250", description: "", tags: [] },
                { name: "Spiced Kairi", price: "₹250", description: "", tags: [] },
                { name: "Kokum Ginger", price: "₹250", description: "", tags: [] },
            ],
            "Dessert": [
                { name: "MOKA-misu", price: "₹400", description: "Tokyo-style tiramisu with kinako dust.", tags: ["GF", "Bestseller"] },
                { name: "Matcha San Sebastian", price: "₹450", description: "Burnt basque cheesecake with premium matcha.", tags: ["GF"] }
            ]
        }
    },
    reviews: [
        {
            user: "Aisha K.",
            rating: 5,
            text: "The most aesthetic cafe in Bandra! The Gula Melaka Latte is a must-try. Feels like I'm in Tokyo."
        },
        {
            user: "Rohan D.",
            rating: 4,
            text: "Great vibes and amazing coffee. The Katsu Sando was crispy and delicious. A bit pricey but worth it for the ambiance."
        },
        {
            user: "Simran S.",
            rating: 5,
            text: "Love the minimal decor. Perfect spot for working or catching up with friends. The matcha cheesecake is divine."
        }
    ]
};
