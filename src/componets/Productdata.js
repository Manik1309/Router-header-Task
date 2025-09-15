
 import React from 'react';


const  products = [
    {
      "id": "ELEC001",
      "category": "electronics",
      "title": "Wireless Noise-Cancelling Headphones",
      "brand": "SoundMax",
      "price": 199.99,
      "currency": "USD",
      "stock": 25,
      "rating": 4.5,
      "description": "Over-ear wireless headphones with active noise cancellation and 20 hour battery life.",
      "images": [
        "https://example.com/images/headphones1.jpg",
        "https://example.com/images/headphones2.jpg"
      ],
      "specifications": {
        "battery_life_hours": 20,
        "bluetooth_version": "5.0",
        "weight_grams": 250,
        "frequency_response": "20Hz-20kHz"
      }
    },
    {
      "id": "ELEC002",
      "category": "electronics",
      "title": "4K Ultra HD Smart TV 55″",
      "brand": "ViewPro",
      "price": 699.99,
      "currency": "USD",
      "stock": 10,
      "rating": 4.7,
      "description": "55-inch 4K smart TV with HDR10 and built in streaming apps.",
      "images": [
        "https://example.com/images/tv55_front.jpg",
        "https://example.com/images/tv55_side.jpg"
      ],
      "specifications": {
        "screen_size_inch": 55,
        "resolution": "3840x2160",
        "hdmi_ports": 3,
        "smart_tv_os": "ViewOS 3.2"
      }
    },
    {
      "id": "ELEC003",
      "category": "electronics",
      "title": "Gaming Laptop RTX 3060",
      "brand": "HyperTech",
      "price": 1299.99,
      "currency": "USD",
      "stock": 7,
      "rating": 4.6,
      "description": "High performance gaming laptop with RTX 3060, 16GB RAM, 1TB SSD.",
      "images": [
        "https://example.com/images/laptop_front.jpg",
        "https://example.com/images/laptop_back.jpg"
      ],
      "specifications": {
        "gpu": "NVIDIA RTX 3060",
        "ram_gb": 16,
        "storage_gb": 1024,
        "processor": "Intel i7-11800H",
        "display_refresh_rate_hz": 144
      }
    },
    {
      "id": "ELEC004",
      "category": "electronics",
      "title": "Bluetooth Portable Speaker",
      "brand": "BassBlast",
      "price": 89.50,
      "currency": "USD",
      "stock": 30,
      "rating": 4.4,
      "description": "Portable speaker, splash proof, with 12 hour battery and deep bass.",
      "images": [
        "https://example.com/images/speaker1.jpg"
      ],
      "specifications": {
        "battery_life_hours": 12,
        "water_resistance": "IPX5",
        "weight_grams": 600,
        "bluetooth_range_meters": 10
      }
    },
    {
      "id": "ELEC005",
      "category": "electronics",
      "title": "Smart Watch Series 5",
      "brand": "GearTime",
      "price": 249.99,
      "currency": "USD",
      "stock": 15,
      "rating": 4.2,
      "description": "Feature-rich smartwatch with heart rate, GPS, sleep tracking.",
      "images": [
        "https://example.com/images/smartwatch1.jpg",
        "https://example.com/images/smartwatch2.jpg"
      ],
      "specifications": {
        "gps": true,
        "heart_rate_monitor": true,
        "battery_life_days": 2,
        "water_resistance": "5ATM"
      }
    },
    {
      "id": "BOOK001",
      "category": "books",
      "title": "Atomic Habits",
      "author": "James Clear",
      "price": 15.99,
      "currency": "USD",
      "stock": 100,
      "rating": 4.8,
      "description": "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
      "images": [
        "https://example.com/images/atomic_habits.jpg"
      ],
      "details": {
        "publisher": "Avery",
        "publication_date": "2018-10-16",
        "pages": 320,
        "language": "English",
        "isbn_13": "978-0735211292"
      }
    },
    {
      "id": "BOOK002",
      "category": "books",
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 14.00,
      "currency": "USD",
      "stock": 80,
      "rating": 4.7,
      "description": "A novel about a shepherd’s journey to the pyramids of Egypt, learning to follow his heart.",
      "images": [
        "https://example.com/images/alchemist.jpg"
      ],
      "details": {
        "publisher": "HarperOne",
        "publication_date": "1993-05-01",
        "pages": 208,
        "language": "English",
        "isbn_13": "978-0061122415"
      }
    },
    {
      "id": "BOOK003",
      "category": "books",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "price": 12.99,
      "currency": "USD",
      "stock": 60,
      "rating": 4.9,
      "description": "Classic novel about racial injustice in the Deep South.",
      "images": [
        "https://example.com/images/mockingbird.jpg"
      ],
      "details": {
        "publisher": "J.B. Lippincott & Co.",
        "publication_date": "1960-07-11",
        "pages": 281,
        "language": "English",
        "isbn_13": "978-0060935467"
      }
    },
    {
      "id": "BOOK004",
      "category": "books",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "price": 10.99,
      "currency": "USD",
      "stock": 75,
      "rating": 4.4,
      "description": "Story of the Jazz Age in the United States.",
      "images": [
        "https://example.com/images/gatsby.jpg"
      ],
      "details": {
        "publisher": "Scribner",
        "publication_date": "1925-04-10",
        "pages": 180,
        "language": "English",
        "isbn_13": "978-0743273565"
      }
    },
    {
      "id": "BOOK005",
      "category": "books",
      "title": "1984",
      "author": "George Orwell",
      "price": 13.50,
      "currency": "USD",
      "stock": 65,
      "rating": 4.6,
      "description": "Dystopian novel about a total surveillance state.",
      "images": [
        "https://example.com/images/1984.jpg"
      ],
      "details": {
        "publisher": "Secker & Warburg",
        "publication_date": "1949-06-08",
        "pages": 328,
        "language": "English",
        "isbn_13": "978-0451524935"
      }
    },
    {
      "id": "FASH001",
      "category": "fashion",
      "title": "Men's Slim Fit Denim Jacket",
      "brand": "UrbanWear",
      "price": 79.99,
      "currency": "USD",
      "stock": 40,
      "rating": 4.3,
      "description": "Stylish slim-fit denim jacket with button closures, great for casual wear.",
      "images": [
        "https://example.com/images/denim_jacket_front.jpg",
        "https://example.com/images/denim_jacket_back.jpg"
      ],
      "attributes": {
        "material": "100% cotton",
        "sizes_available": ["S", "M", "L", "XL"],
        "colors": ["blue", "black"],
        "care_instructions": "Machine wash cold, tumble dry low"
      }
    },
    {
      "id": "FASH002",
      "category": "fashion",
      "title": "Women’s Floral Maxi Dress",
      "brand": "Bloom & Co",
      "price": 59.50,
      "currency": "USD",
      "stock": 35,
      "rating": 4.5,
      "description": "Long flowy maxi dress with floral print, lightweight fabric, ideal for summer.",
      "images": [
        "https://example.com/images/maxi_dress1.jpg"
      ],
      "attributes": {
        "material": "Polyester blend",
        "sizes_available": ["XS","S","M","L"],
        "colors": ["red","white","yellow"],
        "care_instructions": "Hand wash cold"
      }
    },
    {
      "id": "FASH003",
      "category": "fashion",
      "title": "Sports Running Shoes",
      "brand": "FleetFast",
      "price": 120.00,
      "currency": "USD",
      "stock": 50,
      "rating": 4.6,
      "description": "Cushioned running shoes with breathable mesh upper and shock absorbing sole.",
      "images": [
        "https://example.com/images/running_shoes1.jpg",
        "https://example.com/images/running_shoes2.jpg"
      ],
      "attributes": {
        "sizes_available": [6,7,8,9,10,11],
        "colors": ["neon green","black","white"],
        "material": "Mesh & synthetic",
        "care_instructions": "Wipe clean, air dry"
      }
    },
    {
      "id": "FASH004",
      "category": "fashion",
      "title": "Classic Leather Belt",
      "brand": "LeatherEdge",
      "price": 39.99,
      "currency": "USD",
      "stock": 80,
      "rating": 4.8,
      "description": "Genuine leather belt with reversible buckle design.",
      "images": [
        "https://example.com/images/leather_belt.jpg"
      ],
      "attributes": {
        "material": "Genuine leather",
        "sizes_available": ["S","M","L","XL"],
        "colors": ["brown","black"],
        "care_instructions": "Use leather conditioner"
      }
    },
    {
      "id": "FASH005",
      "category": "fashion",
      "title": "Unisex Hoodie Pullover",
      "brand": "CozyThreads",
      "price": 49.99,
      "currency": "USD",
      "stock": 60,
      "rating": 4.4,
      "description": "Soft cotton/poly blend hoodie, with kangaroo pocket and drawstring hood.",
      "images": [
        "https://example.com/images/hoodie1.jpg"
      ],
      "attributes": {
        "material": "70% cotton, 30% polyester",
        "sizes_available": ["S","M","L","XL","XXL"],
        "colors": ["grey","navy","black"],
        "care_instructions": "Machine wash cold, tumble dry low"
      }
    },
    {
      "id": "HOME001",
      "category": "home appliances",
      "title": "High-Speed Blender 1500W",
      "brand": "KitchenPro",
      "price": 249.99,
      "currency": "USD",
      "stock": 18,
      "rating": 4.6,
      "description": "Powerful blender with 1500 watts motor, multiple speed settings, includes smoothie and ice-crush modes.",
      "images": [
        "https://example.com/images/blender1.jpg",
        "https://example.com/images/blender2.jpg"
      ],
      "specifications": {
        "power_watts": 1500,
        "capacity_liters": 1.8,
        "speed_settings": 10,
        "material_of_jar": "BPA-free plastic",
        "dimensions_cm": { "width": 20, "height": 40, "depth": 18 }
      }
    },
    {
      "id": "HOME002",
      "category": "home appliances",
      "title": "Robot Vacuum Cleaner",
      "brand": "CleanSweep",
      "price": 399.99,
      "currency": "USD",
      "stock": 12,
      "rating": 4.4,
      "description": "Automatic robot vacuum with mapping sensors, works on hardwood & carpet.",
      "images": [
        "https://example.com/images/robot_vacuum1.jpg"
      ],
      "specifications": {
        "battery_life_minutes": 120,
        "dust_bin_capacity_liters": 0.6,
        "sensors": ["LiDAR", "Cliff detection"],
        "noise_level_db": 65
      }
    },
    {
      "id": "HOME003",
      "category": "home appliances",
      "title": "Stainless Steel Air Fryer",
      "brand": "CrispCook",
      "price": 129.00,
      "currency": "USD",
      "stock": 25,
      "rating": 4.5,
      "description": "6-quart air fryer with stainless steel basket, 8 presets, dishwasher safe parts.",
      "images": [
        "https://example.com/images/airfryer1.jpg"
      ],
      "specifications": {
        "capacity_quarts": 6,
        "preset_count": 8,
        "power_watts": 1700,
        "temperature_range_celsius": { "min": 80, "max": 200 }
      }
    },
    {
      "id": "HOME004",
      "category": "home appliances",
      "title": "Smart WiFi Thermostat",
      "brand": "EcoTemp",
      "price": 199.00,
      "currency": "USD",
      "stock": 20,
      "rating": 4.3,
      "description": "WiFi enabled thermostat, voice control compatible, energy-saving modes.",
      "images": [
        "https://example.com/images/thermostat1.jpg"
      ],
      "specifications": {
        "connectivity": ["WiFi","Bluetooth"],
        "compatibility": ["Alexa","Google Assistant"],
        "power_source": "Battery",
        "temperature_control_range_celsius": { "min": 5, "max": 35 }
      }
    },
    {
      "id": "HOME005",
      "category": "home appliances",
      "title": "Front Load Washing Machine 8kg",
      "brand": "WashMaster",
      "price": 649.99,
      "currency": "USD",
      "stock": 8,
      "rating": 4.2,
      "description": "8kg stainless steel drum front load washer with multiple wash programs and delay start.",
      "images": [
        "https://example.com/images/washing_machine1.jpg"
      ],
      "specifications": {
        "capacity_kg": 8,
        "spin_speed_rpm": 1200,
        "energy_rating": "A++",
        "noise_level_db": 72
      }
    },
    {
      "id": "HOME006",
      "category": "home appliances",
      "title": "Microwave Oven 25L",
      "brand": "QuickHeat",
      "price": 149.99,
      "currency": "USD",
      "stock": 22,
      "rating": 4.1,
      "description": "25-liter microwave oven with grill function and multiple auto cook settings.",
      "images": [
        "https://example.com/images/microwave1.jpg"
      ],
      "specifications": {
        "capacity_liters": 25,
        "power_watts": 1000,
        "has_grill": true,
        "auto_cook_presets": 10
      }
    },
    {
      "id": "HOME007",
      "category": "home appliances",
      "title": "Cordless Hand Vacuum",
      "brand": "DustAway",
      "price": 89.99,
      "currency": "USD",
      "stock": 30,
      "rating": 4.5,
      "description": "Lightweight cordless hand vacuum for quick cleanups. 30 min run-time.",
      "images": [
        "https://example.com/images/hand_vacuum1.jpg"
      ],
      "specifications": {
        "battery_run_time_minutes": 30,
        "dust_container_capacity_liters": 0.5,
        "weight_kg": 1.2,
        "charging_time_hours": 3
      }
    },
    {
      "id": "HOME008",
      "category": "home appliances",
      "title": "LED Desk Lamp with USB Port",
      "brand": "BrightLite",
      "price": 39.99,
      "currency": "USD",
      "stock": 45,
      "rating": 4.7,
      "description": "Adjustable LED desk lamp with touch control and built-in USB charging port.",
      "images": [
        "https://example.com/images/desk_lamp1.jpg"
      ],
      "specifications": {
        "lumens": 800,
        "color_temperature_kelvin": { "min": 3000, "max": 6000 },
        "usb_ports": 1,
        "power_source": "AC adapter"
      }
    }
  ]

export default products;