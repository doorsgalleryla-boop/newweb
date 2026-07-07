// Modified: product catalog now loads from products.json and supports expanded filters, galleries, and product details.
let products = [];
const fallbackProducts = [
  {
    "id": "fl-1-black-shagreen-fl-1-black-shagreen-edited",
    "model": "FL-1",
    "name": "FL-1 Black Shagreen",
    "collection": "Frameless Door Collection",
    "category": "Frameless Door Collection",
    "color": "Black Shagreen",
    "colors": [
      "Black Shagreen"
    ],
    "price": 850,
    "priceLabel": "from $850",
    "image": "./assets/products/fl-1-black-shagreen-edited.webp",
    "gallery": [
      "./assets/products/fl-1-black-shagreen-edited.webp"
    ],
    "description": "Frameless modern door with a refined slab face and clean architectural reveal.",
    "sizes": [
      "80 inch height - $850",
      "96 inch height - custom quote",
      "Custom width available"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Frameless concealed-frame configuration with premium modern hardware.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "FL-1  Black Shagreen - Edited.jpg",
    "notes": ""
  },
  {
    "id": "fl-4-golden-oak-fl-4-golden-oak-edited",
    "model": "FL-4",
    "name": "FL-4 Golden Oak",
    "collection": "Frameless Door Collection",
    "category": "Frameless Door Collection",
    "color": "Golden Oak",
    "colors": [
      "Golden Oak"
    ],
    "price": 850,
    "priceLabel": "from $850",
    "image": "./assets/products/fl-4-golden-oak-edited.webp",
    "gallery": [
      "./assets/products/fl-4-golden-oak-edited.webp"
    ],
    "description": "Frameless modern door with a refined slab face and clean architectural reveal.",
    "sizes": [
      "80 inch height - $850",
      "96 inch height - custom quote",
      "Custom width available"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Frameless concealed-frame configuration with premium modern hardware.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "FL-4 Golden Oak - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-a-yl-a-edited",
    "model": "YL-A",
    "name": "YL-A",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-a-edited.webp",
    "gallery": [
      "./assets/products/yl-a-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-A - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-04-white-matt-with-matt-glass-untitled-design-1-edited-2",
    "model": "LV-04",
    "name": "LV-04 White Matt with Matt Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "White Matt",
    "colors": [
      "White Matt"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/untitled-design-1-edited-2.webp",
    "gallery": [
      "./assets/products/untitled-design-1-edited-2.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "Untitled Design - 1 - Edited (2).png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "yl-g-handleside-gold-yl-g-handleside-gold-edited",
    "model": "LV",
    "name": "YL-G Handleside Gold",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/yl-g-handleside-gold-edited.webp",
    "gallery": [
      "./assets/products/yl-g-handleside-gold-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-G_Handleside_Gold - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-g-hinge-black-yl-g-hinge-black-edited",
    "model": "LV",
    "name": "YL-G Hinge Black",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/yl-g-hinge-black-edited.webp",
    "gallery": [
      "./assets/products/yl-g-hinge-black-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-G_Hinge_Black - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-golden-oak-with-black-glass-img-0095-edited",
    "model": "LV",
    "name": "LV Golden Oak with Black Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Golden Oak",
    "colors": [
      "Golden Oak"
    ],
    "price": 700,
    "priceLabel": "from $700",
    "image": "./assets/products/img-0095-edited.webp",
    "gallery": [
      "./assets/products/img-0095-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "IMG_0095 - Edited.png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "lv-wenge-with-black-glass-img-0088-edited",
    "model": "LV",
    "name": "LV Wenge with Black Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Wenge",
    "colors": [
      "Wenge"
    ],
    "price": 800,
    "priceLabel": "from $800",
    "image": "./assets/products/img-0088-edited.webp",
    "gallery": [
      "./assets/products/img-0088-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "IMG_0088 - Edited.png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "lv-magnolia-with-black-glass-img-0089-edited",
    "model": "LV",
    "name": "LV Magnolia with Black Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Magnolia",
    "colors": [
      "Magnolia"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/img-0089-edited.webp",
    "gallery": [
      "./assets/products/img-0089-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "IMG_0089 - Edited.png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "lv-ash-white-with-black-glass-photo-2026-02-16-22-24-31-edited",
    "model": "LV",
    "name": "LV Ash White with Black Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Ash White",
    "colors": [
      "Ash White"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/photo-2026-02-16-22-24-31-edited.webp",
    "gallery": [
      "./assets/products/photo-2026-02-16-22-24-31-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "photo_2026-02-16_22-24-31 - Edited.png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "fl-3-anthracite-concrete-fl-3-anthracite-concrete-edited",
    "model": "FL-3",
    "name": "FL-3 Anthracite Concrete",
    "collection": "Frameless Door Collection",
    "category": "Frameless Door Collection",
    "color": "Anthracite Concrete",
    "colors": [
      "Anthracite Concrete"
    ],
    "price": 850,
    "priceLabel": "from $850",
    "image": "./assets/products/fl-3-anthracite-concrete-edited.webp",
    "gallery": [
      "./assets/products/fl-3-anthracite-concrete-edited.webp"
    ],
    "description": "Frameless modern door with a refined slab face and clean architectural reveal.",
    "sizes": [
      "80 inch height - $850",
      "96 inch height - custom quote",
      "Custom width available"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Frameless concealed-frame configuration with premium modern hardware.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "FL-3 Anthracite Concrete - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-c-yl-c-edited",
    "model": "YL-C",
    "name": "YL-C",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-c-edited.webp",
    "gallery": [
      "./assets/products/yl-c-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-C - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-g-yl-g-edited",
    "model": "YL-G",
    "name": "YL-G",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-g-edited.webp",
    "gallery": [
      "./assets/products/yl-g-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-G - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-h-soft-touch-yl-h-edited",
    "model": "YL-H",
    "name": "YL-H Soft Touch",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-h-edited.webp",
    "gallery": [
      "./assets/products/yl-h-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-H - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-white-matt-with-black-glass-untitled-design-1-edited",
    "model": "LV",
    "name": "LV White Matt with Black Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "White Matt",
    "colors": [
      "White Matt"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/untitled-design-1-edited.webp",
    "gallery": [
      "./assets/products/untitled-design-1-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "Untitled Design - 1 - Edited.png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "yl-f-yl-f-edited",
    "model": "YL-F",
    "name": "YL-F",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-f-edited.webp",
    "gallery": [
      "./assets/products/yl-f-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-F - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-b-yl-b-edited",
    "model": "YL-B",
    "name": "YL-B",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-b-edited.webp",
    "gallery": [
      "./assets/products/yl-b-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-B - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-18-white-matt-matt-glass-copy-of-lv-18-white-matt-matt-glass-edited",
    "model": "LV-18",
    "name": "LV-18 white matt.matt glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "white Matt with Matt glass",
    "colors": [
      "white Matt with Matt glass"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/copy-of-lv-18-white-matt-matt-glass-edited.webp",
    "gallery": [
      "./assets/products/copy-of-lv-18-white-matt-matt-glass-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "Copy of LV-18 white matt.matt glass - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-04-magnolia-matt-with-matt-glass-lv-04-magnolia-matt-with-matt-glass-1-copy-edited",
    "model": "LV-04",
    "name": "LV-04 magnolia matt with matt glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Magnolia Matt",
    "colors": [
      "Magnolia Matt"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-04-magnolia-matt-with-matt-glass-1-copy-edited.webp",
    "gallery": [
      "./assets/products/lv-04-magnolia-matt-with-matt-glass-1-copy-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-04 magnolia matt with matt glass (1) - Copy - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-18-dark-concrete-lv-18-dark-concrete-2-edited",
    "model": "LV-18",
    "name": "LV-18 dark concrete",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Dark Concrete",
    "colors": [
      "Dark Concrete"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-18-dark-concrete-2-edited.webp",
    "gallery": [
      "./assets/products/lv-18-dark-concrete-2-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-18 dark concrete (2) - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-20-alyaska-wood-lv-20-alyaska-wood-edited",
    "model": "LV-20",
    "name": "LV-20 Alyaska wood",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Alyaska Wood",
    "colors": [
      "Alyaska Wood"
    ],
    "price": 600,
    "priceLabel": "from $600",
    "image": "./assets/products/lv-20-alyaska-wood-edited.webp",
    "gallery": [
      "./assets/products/lv-20-alyaska-wood-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-20 Alyaska wood - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-11-black-matt-with-black-glass-lv-11-black-matt-with-black-glass-edited",
    "model": "LV-11",
    "name": "LV-11 black matt with black glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Black Matt",
    "colors": [
      "Black Matt"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-11-black-matt-with-black-glass-edited.webp",
    "gallery": [
      "./assets/products/lv-11-black-matt-with-black-glass-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-11 black matt with black glass - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-wenge-al-wenge-edited",
    "model": "AL",
    "name": "LV Wenge",
    "collection": "Flat Panel Collection",
    "category": "Flat Panel Collection",
    "color": "Wenge",
    "colors": [
      "Wenge"
    ],
    "price": 800,
    "priceLabel": "from $800",
    "image": "./assets/products/al-wenge-edited.webp",
    "gallery": [
      "./assets/products/al-wenge-edited.webp"
    ],
    "description": "Flat panel interior door with a quiet minimalist profile and rich finish.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Flat panel swing door with clean slab profile and matching jamb package.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "AL Wenge - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-golden-oak-sl-golden-oak-edited",
    "model": "SL",
    "name": "LV Golden Oak",
    "collection": "Flat Panel Collection",
    "category": "Flat Panel Collection",
    "color": "Golden Oak",
    "colors": [
      "Golden Oak"
    ],
    "price": 700,
    "priceLabel": "from $700",
    "image": "./assets/products/sl-golden-oak-edited.webp",
    "gallery": [
      "./assets/products/sl-golden-oak-edited.webp"
    ],
    "description": "Flat panel interior door with a quiet minimalist profile and rich finish.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Flat panel swing door with clean slab profile and matching jamb package.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "SL Golden Oak - Edited.png",
    "notes": ""
  },
  {
    "id": "fl-2-beige-concrete-fl-2-beige-concrete-edited",
    "model": "FL-2",
    "name": "FL-2 Beige Concrete",
    "collection": "Frameless Door Collection",
    "category": "Frameless Door Collection",
    "color": "Beige Concrete",
    "colors": [
      "Beige Concrete"
    ],
    "price": 850,
    "priceLabel": "from $850",
    "image": "./assets/products/fl-2-beige-concrete-edited.webp",
    "gallery": [
      "./assets/products/fl-2-beige-concrete-edited.webp"
    ],
    "description": "Frameless modern door with a refined slab face and clean architectural reveal.",
    "sizes": [
      "80 inch height - $850",
      "96 inch height - custom quote",
      "Custom width available"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Frameless concealed-frame configuration with premium modern hardware.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "FL-2 Beige Concrete - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-e-yl-e-edited",
    "model": "YL-E",
    "name": "YL-E",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-e-edited.webp",
    "gallery": [
      "./assets/products/yl-e-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-E - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-04-black-matt-with-black-glass-lv-04-black-matt-with-black-glass-copy-edited",
    "model": "LV-04",
    "name": "LV-04 black matt with black glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Black Matt",
    "colors": [
      "Black Matt"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-04-black-matt-with-black-glass-copy-edited.webp",
    "gallery": [
      "./assets/products/lv-04-black-matt-with-black-glass-copy-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-04 black matt with black glass - Copy - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-08-ash-white-with-black-glass-lv-08-ash-white-with-black-glass-edited",
    "model": "LV-08",
    "name": "LV-08 ash white with black glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Ash White",
    "colors": [
      "Ash White"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-08-ash-white-with-black-glass-edited.webp",
    "gallery": [
      "./assets/products/lv-08-ash-white-with-black-glass-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-08 ash white with black glass - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-04-charcoal-concrete-with-black-glass-lv-04-charcoal-concrete-with-black-glass-edited",
    "model": "LV-04",
    "name": "LV-04 charcoal concrete with black glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Charcoal Concrete",
    "colors": [
      "Charcoal Concrete"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-04-charcoal-concrete-with-black-glass-edited.webp",
    "gallery": [
      "./assets/products/lv-04-charcoal-concrete-with-black-glass-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-04 charcoal concrete with black glass - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-d-yl-d-edited",
    "model": "YL-D",
    "name": "YL-D",
    "collection": "Custom Door Collection",
    "category": "Custom Door Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 800,
    "priceLabel": "80 inch height from $800; 96 inch height from $1200",
    "image": "./assets/products/yl-d-edited.webp",
    "gallery": [
      "./assets/products/yl-d-edited.webp"
    ],
    "description": "Custom YL door system available in 80 inch and 96 inch heights with premium hardware options.",
    "sizes": [
      "80 inch height - $800",
      "96 inch height - $1200"
    ],
    "availability": "Custom order",
    "doorConfiguration": "Custom YL swing door configuration with finish, handle, and privacy options.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-D - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-21-beige-concrete-with-matt-glass-lv-21-beige-concrete-with-matt-glass-edited",
    "model": "LV-21",
    "name": "LV-21 beige concrete with matt glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "beige concrete",
    "colors": [
      "beige concrete"
    ],
    "price": 600,
    "priceLabel": "from $600",
    "image": "./assets/products/lv-21-beige-concrete-with-matt-glass-edited.webp",
    "gallery": [
      "./assets/products/lv-21-beige-concrete-with-matt-glass-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-21 beige concrete with matt glass - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-18-wenge-with-black-glass-lv-18-wenge-with-black-glass-3-edited",
    "model": "LV-18",
    "name": "LV-18 wenge with black glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "wenge",
    "colors": [
      "wenge"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-18-wenge-with-black-glass-3-edited.webp",
    "gallery": [
      "./assets/products/lv-18-wenge-with-black-glass-3-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-18 wenge with black glass (3) - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-10-cappuccino-with-matt-glass-lv-10-cappuccino-with-matt-glass-edited",
    "model": "LV-10",
    "name": "LV-10 cappuccino with matt glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "cappuccino",
    "colors": [
      "cappuccino"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/lv-10-cappuccino-with-matt-glass-edited.webp",
    "gallery": [
      "./assets/products/lv-10-cappuccino-with-matt-glass-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "LV-10 cappuccino with matt glass   - Edited.png",
    "notes": ""
  },
  {
    "id": "yl-b-combination-black-yl-b-combination-black-edited",
    "model": "LV",
    "name": "YL-B Combination Black",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Custom Finish",
    "colors": [
      "Custom Finish"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/yl-b-combination-black-edited.webp",
    "gallery": [
      "./assets/products/yl-b-combination-black-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "YL-B_Combination_Black - Edited.png",
    "notes": ""
  },
  {
    "id": "lv-white-matt-with-matt-glass-img-0090-edited",
    "model": "LV",
    "name": "LV White Matt with Matt Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "White Matt",
    "colors": [
      "White Matt"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/img-0090-edited.webp",
    "gallery": [
      "./assets/products/img-0090-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "IMG_0090 - Edited.png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "lv-white-matt-with-double-glass-img-0092-edited",
    "model": "LV",
    "name": "LV White Matt with Double Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "White Matt",
    "colors": [
      "White Matt"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/img-0092-edited.webp",
    "gallery": [
      "./assets/products/img-0092-edited.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "IMG_0092 - Edited.png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  },
  {
    "id": "lv-champagne-with-light-glass-untitled-design-1-edited-1",
    "model": "LV",
    "name": "LV Champagne with Light Glass",
    "collection": "Modern Collection",
    "category": "Modern Collection",
    "color": "Champagne",
    "colors": [
      "Champagne"
    ],
    "price": 650,
    "priceLabel": "from $650",
    "image": "./assets/products/untitled-design-1-edited-1.webp",
    "gallery": [
      "./assets/products/untitled-design-1-edited-1.webp"
    ],
    "description": "Modern LV interior door with premium finish, glass detail options, and a complete installation-ready set.",
    "sizes": [
      "28 x 80",
      "30 x 80",
      "32 x 80",
      "36 x 84",
      "Custom order"
    ],
    "availability": "In stock / custom order",
    "doorConfiguration": "Modern LV swing door with glass or panel detailing, jamb, casing, lock, and hinges.",
    "includedSet": [
      "Door slab",
      "Jamb",
      "Extensions",
      "Casing / moldings",
      "European magnetic lock",
      "Hinges",
      "15+ handle styles",
      "Privacy or keyed options available"
    ],
    "sourceFile": "Untitled Design - 1 - Edited (1).png",
    "notes": "Image filename was unclear; product name was assigned from visible style/finish. Replace or edit this entry in products.json if needed."
  }
];
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
function money(value){ return "from $" + Number(value).toLocaleString(); }
function productPrice(product){ return product.priceLabel || money(product.price); }
async function loadProducts(){
  if (products.length) return products;
  try {
    const response = await fetch('products.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('products.json not found');
    products = await response.json();
    console.log('Products loaded successfully');
  } catch (error) {
    console.warn('Using fallback product catalog.', error);
    products = fallbackProducts;
    if (products.length) console.log('Products loaded successfully');
  }
  if (!products.length) console.warn('No products found');
  return products;
}
function productCard(product){
  const swatches = (product.colors || [product.color]).map(color => '<span class="pill">' + color + '</span>').join('');
  return '<article class="product-card"><a href="product.html?id=' + product.id + '" aria-label="View ' + product.name + '"><img src="' + product.image + '" alt="' + product.name + '" width="900" height="1200" loading="lazy"></a><div class="product-card-body"><p class="model-code">' + product.model + '</p><h3>' + product.name + '</h3><p>' + product.description + '</p><div class="tag-line"><span class="pill">' + product.collection + '</span>' + swatches + '</div><div class="meta-line"><span>' + (product.sizes || []).join(', ') + '</span><strong>' + productPrice(product) + '</strong></div><div class="card-actions"><a class="btn secondary" href="product.html?id=' + product.id + '">Details</a><a class="btn primary" href="contact.html?model=' + encodeURIComponent(product.name) + '">Request Estimate</a></div></div></article>';
}
async function renderFeatured(){
  const target = $('[data-featured-products]'); if(!target) return;
  await loadProducts();
  const featured = products.filter(p => ['Modern Collection','Frameless Door Collection','Custom Door Collection'].includes(p.collection)).slice(0,3);
  target.innerHTML = featured.map(productCard).join('');
}
function uniqueValues(key){ return [...new Set(products.flatMap(p => Array.isArray(p[key]) ? p[key] : [p[key]]).filter(Boolean))].sort(); }
async function setupFilters(){
  const grid = $('[data-products-grid]'); if(!grid) return;
  console.log('Product container found');
  grid.innerHTML = '<p class="loading-state">Loading door collection...</p>';
  await loadProducts();
  const filters = $$('[data-filter]'); const count = $('[data-result-count]');
  const optionMap = {collection:uniqueValues('collection'), model:uniqueValues('model'), color:uniqueValues('color'), size:uniqueValues('sizes')};
  filters.forEach(select => { const key = select.dataset.filter; if(optionMap[key]) optionMap[key].forEach(value => select.insertAdjacentHTML('beforeend', '<option value="' + value + '">' + value + '</option>')); select.addEventListener('change', render); });
  $('[data-reset-filters]')?.addEventListener('click', () => { filters.forEach(select => select.value = ''); render(); });
  function render(){
    const active = Object.fromEntries(filters.map(select => [select.dataset.filter, select.value]));
    const visible = products.filter(product => {
      let priceOk = true; if(active.price){ const parts = active.price.split('-').map(Number); priceOk = product.price >= parts[0] && product.price < parts[1]; }
      return (!active.collection || product.collection === active.collection) && (!active.model || product.model === active.model) && (!active.color || product.color === active.color || (product.colors || []).includes(active.color)) && (!active.size || (product.sizes || []).includes(active.size)) && priceOk;
    });
    if(!visible.length) console.warn('No products found');
    grid.innerHTML = visible.length ? visible.map(productCard).join('') : '<p class="empty-state">No doors match these filters. Try a wider price range or request a custom estimate.</p>'; 
    if(count) count.textContent = visible.length;
  }
  render();
}
function galleryMarkup(product){
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
  const thumbs = gallery.map((src, index) => '<button type="button" data-gallery-thumb="' + src + '" aria-current="' + (index === 0 ? 'true' : 'false') + '"><img src="' + src + '" alt="' + product.name + ' view ' + (index + 1) + '"></button>').join('');
  return '<div class="gallery-shell"><div class="main-product-image"><img data-main-product-image src="' + gallery[0] + '" alt="' + product.name + '" width="1000" height="1400"></div><div class="gallery-thumbs">' + thumbs + '</div></div>';
}
async function renderDetail(){
  const target = $('[data-product-detail]'); if(!target) return;
  await loadProducts();
  const id = new URLSearchParams(location.search).get('id') || (products[0] && products[0].id);
  const product = products.find(item => item.id === id) || products[0];
  if(!product){ target.innerHTML = '<p class="empty-state">Product catalog is empty.</p>'; return; }
  document.title = 'Doors Gallery | Modern Interior Doors.';
  document.querySelector('meta[name="description"]')?.setAttribute('content', product.name + ' starts at $' + product.price + '. View gallery, sizes, configuration, included set details, and request an estimate from Doors Gallery.');
  const included = (product.includedSet || []).map(item => '<li>' + item + '</li>').join('');
  const sizes = (product.sizes || []).map(item => '<li><span>' + item + '</span></li>').join('');
  target.innerHTML = galleryMarkup(product) + '<div class="detail-copy"><div class="detail-kicker"><span>' + product.collection + '</span><span>' + product.model + '</span></div><h1>' + product.name + '</h1><p>' + product.description + '</p><p class="price">' + productPrice(product) + '</p><dl class="detail-list"><div><dt>Collection / category</dt><dd>' + product.collection + '</dd></div><div><dt>Model number</dt><dd>' + product.model + '</dd></div><div><dt>Color / finish</dt><dd>' + product.color + '</dd></div><div><dt>Door configuration</dt><dd>' + product.doorConfiguration + '</dd></div><div><dt>Available sizes</dt><dd><ul class="size-price-list">' + sizes + '</ul></dd></div></dl><h3>Included set details</h3><ul class="included-grid">' + included + '</ul>' + (product.notes ? '<p class="catalog-note">' + product.notes + '</p>' : '') + '<div class="button-row"><a class="btn primary" href="contact.html?model=' + encodeURIComponent(product.name) + '">Request Estimate</a><a class="btn secondary" href="products.html">View Collection</a></div></div>';
  const modelField = $('[data-model-field]'); if(modelField) modelField.value = product.name;
  setupGallery();
}
function setupGallery(){
  const main = $('[data-main-product-image]'); if(!main) return;
  $$('[data-gallery-thumb]').forEach(button => button.addEventListener('click', () => { main.src = button.dataset.galleryThumb; $$('[data-gallery-thumb]').forEach(item => item.setAttribute('aria-current', String(item === button))); }));
}
function setupForms(){
  const model = new URLSearchParams(location.search).get('model');
  $$('[name="model"]').forEach(input => { if(model && !input.value) input.value = model; });
  $$('[data-estimate-form]').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); const status = $('.form-status', form); if(status) status.textContent = 'Thank you. Your estimate request is ready to connect to email, CRM, or a form service.'; form.reset(); }));
}
function setupNav(){ const toggle = $('.nav-toggle'); const nav = $('.site-nav'); if(!toggle || !nav) return; toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); }); }

function setupCollectionAnimations(){
  const cards = $$('[data-animate-card]');
  if(!cards.length) return;
  if((window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || typeof IntersectionObserver === 'undefined'){
    cards.forEach(card => card.classList.add('visible'));
    return;
  }
  document.body.classList.add('animations-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' });
  cards.forEach(card => observer.observe(card));
}
function setupHeroVideo(){
  const hero = $('.video-hero');
  const video = $('.hero-video');
  const playButton = $('[data-hero-play]');
  if(!hero || !video || !playButton) return;
  const showFallback = () => { hero.classList.add('video-paused'); playButton.hidden = false; };
  const hideFallback = () => { hero.classList.remove('video-paused'); playButton.hidden = true; };
  const attempt = video.play();
  if(attempt && typeof attempt.catch === 'function') attempt.then(hideFallback).catch(showFallback);
  playButton.addEventListener('click', () => { video.play().then(hideFallback).catch(showFallback); });
}
renderFeatured(); setupFilters(); renderDetail(); setupForms(); setupNav(); setupHeroVideo(); setupCollectionAnimations();