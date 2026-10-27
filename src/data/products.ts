import { Product, CollectionItem, HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    ornament: 'heritage-lotus',
    titleLines: ['Handwoven', 'Heritage Sarees'],
    subtitle: 'Varanasi Mastercraft • Pure Katan Silk',
    description: 'Timeless weaves, rooted in Indian tradition. Discover authentic handlooms, from Banarasi to timeless classics.',
    ctaText: 'Shop Collection →',
    secondaryCtaText: '▷ Our Story',
    image: '/images/hero/hero-slide-1.jpg',
    altText: 'Indian model wearing luxurious purple Banarasi saree with gold zari',
    tag: 'Signature Heritage'
  },
  {
    id: 2,
    ornament: 'heritage-lotus',
    titleLines: ['Royal Bridal', 'Kanjivaram Weaves'],
    subtitle: 'Kanchipuram Heritage • Korvai Technique',
    description: 'Woven with pure mulberry silk and authentic gold-dipped silver zari. Crafted for moments that turn into cherished family heirlooms.',
    ctaText: 'Explore Bridal →',
    secondaryCtaText: '▷ Craftsmanship',
    image: '/images/hero/hero-slide-2.jpg',
    altText: 'Indian bride in royal crimson red and gold Kanjivaram silk saree in palace courtyard',
    tag: 'Bridal Heirloom'
  },
  {
    id: 3,
    ornament: 'heritage-lotus',
    titleLines: ['Imperial Emerald', 'Banarasi Silk'],
    subtitle: 'Meenakari Kadwa • 180 Hours of Weaving',
    description: 'Echoing the regal courts of Awadh, adorned with delicate floral shikargah motifs and luminous antique gold tissue.',
    ctaText: 'View The Edit →',
    secondaryCtaText: '▷ Artisan Story',
    image: '/images/hero/hero-slide-3.jpg',
    altText: 'Model in majestic emerald green and gold tissue Banarasi silk saree',
    tag: 'Festive Grandeur'
  }
];

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'banarasi',
    name: 'Banarasi Sarees',
    slug: 'banarasi',
    image: '/images/collections/banarasi-saree.png',
    description: 'Opulent silk brocades handwoven on pit looms in Varanasi.',
    itemCount: 24
  },
  {
    id: 'kora',
    name: 'Kora Sarees',
    slug: 'kora',
    image: '/images/collections/kora-saree.png',
    description: 'Sheer, lightweight organza silk with gossamer gold zari motifs.',
    itemCount: 18
  },
  {
    id: 'handloom',
    name: 'Handloom Sarees',
    slug: 'handloom',
    image: '/images/collections/handloom-saree.png',
    description: 'Pure artisanal weaves with natural dyes and timeless butta work.',
    itemCount: 32
  },
  {
    id: 'festive',
    name: 'Festive Collection',
    slug: 'festive',
    image: '/images/collections/festive-collection.png',
    description: 'Vibrant marigold and jewel tones woven for celebrations.',
    itemCount: 20
  },
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    image: '/images/collections/new-arrivals.png',
    description: 'Fresh off the artisan looms: limited edition seasonal heirlooms.',
    itemCount: 15
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'ek-001',
    name: 'Agnika Crimson Kanjivaram Silk Saree',
    subtitle: 'Pure Mulberry Silk with Korvai Temple Zari Border',
    price: 48500,
    originalPrice: 56000,
    discount: '13% OFF',
    image: '/images/products/product-1-crimson-kanjivaram.jpg',
    images: [
      '/images/products/product-1-crimson-kanjivaram.jpg',
      '/images/occasions/weddings.jpg',
      '/images/hero/hero-slide-2.jpg'
    ],
    category: 'kanjivaram',
    fabric: 'Pure Mulberry Silk (100% Handloom)',
    zari: 'Certified Tested Gold-Dipped Silver Zari',
    color: 'red',
    occasion: 'wedding',
    badge: 'Heritage Weave',
    inStock: true,
    description: 'A majestic crimson Kanjivaram masterpiece woven using the ancient Korvai interlocking technique. Featuring majestic mayil (peacock) and yali temple border motifs and an opulent brocade pallu.',
    craftDetails: 'Handcrafted over 22 days by master weavers of Kanchipuram using heritage wooden throw-shuttle pit looms.',
    careInstructions: [
      'Dry clean only by specialized silk care professionals.',
      'Store wrapped in breathable muslin or unbleached cotton.',
      'Air periodically in indirect shaded sunlight.',
      'Iron on lowest silk setting with a protective cloth.'
    ],
    specs: {
      length: '5.5 meters',
      width: '46 inches',
      blousePiece: '0.8 meter matching brocade silk blouse included',
      weaveTime: '175 hours',
      origin: 'Kanchipuram, Tamil Nadu'
    }
  },
  {
    id: 'ek-002',
    name: 'Swarna Kanti Gold Tissue Banarasi Saree',
    subtitle: 'Pure Metallic Tissue with Floral Silver-Gold Jaal',
    price: 54000,
    originalPrice: 62000,
    discount: '12% OFF',
    image: '/images/products/product-2-gold-tissue.jpg',
    images: [
      '/images/products/product-2-gold-tissue.jpg',
      '/images/occasions/gifting.jpg'
    ],
    category: 'banarasi',
    fabric: 'Pure Gold Tissue Silk',
    zari: 'Fine Antique Ganga-Jamuna Gold & Silver Zari',
    color: 'gold',
    occasion: 'wedding',
    badge: 'Bestseller',
    inStock: true,
    description: 'Luminous and regal, the Swarna Kanti tissue saree drapes with liquid grace. The warp and weft interlace genuine metallic threads with fine Mulberry silk for a breathtaking heirloom glow.',
    craftDetails: 'Woven with the Kadwa technique where each leaf motif is individually locked and woven without floating threads.',
    careInstructions: [
      'Strictly dry clean only.',
      'Refold along different crease lines every 4 months.',
      'Avoid contact with perfume, moisture and spray cosmetics.'
    ],
    specs: {
      length: '5.5 meters',
      width: '45 inches',
      blousePiece: '0.85 meter plain tissue with zari border',
      weaveTime: '210 hours',
      origin: 'Varanasi, Uttar Pradesh'
    }
  },
  {
    id: 'ek-003',
    name: 'Neelambari Midnight Blue Katan Saree',
    subtitle: 'Royal Shikargah Hunting Scene Zari Brocade',
    price: 42000,
    image: '/images/products/product-3-midnight-blue.jpg',
    images: [
      '/images/products/product-3-midnight-blue.jpg',
      '/images/hero/hero-slide-1.jpg'
    ],
    category: 'banarasi',
    fabric: 'Pure Katan Handloom Silk',
    zari: 'Rich Antique Matt Gold Zari',
    color: 'blue',
    occasion: 'festive',
    badge: 'GI Tagged',
    inStock: true,
    description: 'A tribute to classical Mughal hunting narratives, the Neelambari saree features intricate depictions of royal deer, elephants, and florals intricately rendered in fine zari across a deep midnight blue ground.',
    craftDetails: 'Rendered on traditional jacquard-assisted handlooms preserving century-old Varanasi graphs (naqshas).',
    careInstructions: [
      'Dry clean only.',
      'Never spray water or perfume directly on zari work.',
      'Store flat in a dry, ventilated wardrobe.'
    ],
    specs: {
      length: '5.5 meters',
      width: '45.5 inches',
      blousePiece: '0.8 meter contrasting gold zari brocade blouse',
      weaveTime: '160 hours',
      origin: 'Varanasi, Uttar Pradesh'
    }
  },
  {
    id: 'ek-004',
    name: 'Gulabi Raag Chanderi Pastel Saree',
    subtitle: 'Lightweight Handspun Silk-Cotton with Silver Ashavali Boota',
    price: 24500,
    originalPrice: 28000,
    discount: '12% OFF',
    image: '/images/products/product-4-blush-pink.jpg',
    images: [
      '/images/products/product-4-blush-pink.jpg',
      '/images/occasions/everyday.jpg'
    ],
    category: 'chanderi',
    fabric: 'Pure Chanderi Silk-Cotton Blend',
    zari: 'Delicate Tested Silver Zari',
    color: 'pink',
    occasion: 'everyday',
    badge: 'Pure Silk Mark',
    inStock: true,
    description: 'Effortlessly feminine and feather-light. Crafted from fine hand-reeled silk and Egyptian cotton yarns, this blush pink saree reflects understated opulence for intimate soirees and day celebrations.',
    craftDetails: 'Handwoven by skilled weavers in the historic town of Chanderi using traditional wooden loom frames.',
    careInstructions: [
      'Dry clean recommended for initial washes.',
      'Can be hand-washed gently in cold water with mild silk detergent.',
      'Line dry in shade.'
    ],
    specs: {
      length: '5.5 meters',
      width: '46 inches',
      blousePiece: '0.8 meter self-colored Chanderi blouse fabric',
      weaveTime: '90 hours',
      origin: 'Chanderi, Madhya Pradesh'
    }
  },
  {
    id: 'ek-005',
    name: 'Marakata Emerald Meenakari Banarasi Saree',
    subtitle: 'Rich Jewel-Toned Silk with Floral Kadwa Zari Border',
    price: 52000,
    image: '/images/products/product-5-banarasi-emerald.png',
    images: [
      '/images/products/product-5-banarasi-emerald.png',
      '/images/hero/hero-slide-3.jpg'
    ],
    category: 'banarasi',
    fabric: 'Katan Silk (100% Pure Handloom)',
    zari: 'Antique Gold Zari with Silk Meenakari Enamelling',
    color: 'green',
    occasion: 'wedding',
    badge: 'Heritage Weave',
    inStock: true,
    description: 'An arresting shade of deep emerald green adorned with delicate multi-colored silk threads woven into the gold zari floral motifs, mimicking the ancient court jewelry enameling technique.',
    craftDetails: 'Woven completely by hand using the painstaking Kadwa weaving style with over 180 hours of loom dedication.',
    careInstructions: [
      'Dry clean only.',
      'Wrap in pure muslin cloth with dry neem leaves to protect against moisture.'
    ],
    specs: {
      length: '5.5 meters',
      width: '46 inches',
      blousePiece: '0.8 meter silk blouse with matching border',
      weaveTime: '180 hours',
      origin: 'Varanasi, Uttar Pradesh'
    }
  },
  {
    id: 'ek-006',
    name: 'Rani Kora Organza Silk Saree',
    subtitle: 'Vibrant Magenta Sheer Organza with Sona Rupa Booti',
    price: 29500,
    originalPrice: 34000,
    discount: '15% OFF',
    image: '/images/products/product-6-kora-magenta.png',
    images: [
      '/images/products/product-6-kora-magenta.png',
      '/images/collections/kora-saree.png'
    ],
    category: 'kora',
    fabric: 'Pure Kora Organza Silk',
    zari: 'Dual Gold and Silver (Sona-Rupa) Tested Zari',
    color: 'pink',
    occasion: 'festive',
    badge: 'Bestseller',
    inStock: true,
    description: 'A celebration of vivacious rani pink organza silk that holds an architectural silhouette while feeling practically weightless. Scattered with traditional silver and gold floral florets.',
    craftDetails: 'Handcrafted using degummed raw silk yarns in Varanasi for its signature crisp texture and translucent elegance.',
    careInstructions: [
      'Dry clean only.',
      'Steam iron lightly with low temperature.',
      'Do not fold tightly along delicate organza edges.'
    ],
    specs: {
      length: '5.5 meters',
      width: '45.5 inches',
      blousePiece: '0.8 meter matching rani organza silk piece',
      weaveTime: '110 hours',
      origin: 'Varanasi, Uttar Pradesh'
    }
  },
  {
    id: 'ek-007',
    name: 'Kala Hansa Midnight Handloom Saree',
    subtitle: 'Classic Black Silk with Geometric Gold Temple Border',
    price: 36000,
    image: '/images/products/product-7-handloom-black.png',
    images: [
      '/images/products/product-7-handloom-black.png',
      '/images/collections/handloom-saree.png'
    ],
    category: 'handloom',
    fabric: 'Pure Handspun Mulberry Silk',
    zari: 'Subtle Matt Antique Gold Zari',
    color: 'black',
    occasion: 'party',
    badge: 'New Arrival',
    inStock: true,
    description: 'Dramatic, bold, and unapologetically sophisticated. Dense jet-black handloom silk highlighted by precise temple-inspired gold triangular borders and delicate star buttas.',
    craftDetails: 'Woven on indigenous pit looms using low-tension shuttling that gives the drape an exquisite heavy fall.',
    careInstructions: [
      'Professional dry clean only.',
      'Store in dark, cool spaces away from direct sunlight.'
    ],
    specs: {
      length: '5.5 meters',
      width: '46 inches',
      blousePiece: '0.85 meter solid black silk with border',
      weaveTime: '140 hours',
      origin: 'Kanchipuram & Varanasi Traditions'
    }
  },
  {
    id: 'ek-008',
    name: 'Basanti Peethambari Festive Saree',
    subtitle: 'Auspicious Mustard Marigold Silk with Floral Bel Zari',
    price: 34000,
    originalPrice: 39000,
    discount: '12% OFF',
    image: '/images/products/product-8-festive-mustard.png',
    images: [
      '/images/products/product-8-festive-mustard.png',
      '/images/occasions/festive.jpg'
    ],
    category: 'festive',
    fabric: 'Pure Satin Silk Handloom',
    zari: 'Bright Golden Zari with Red Resham Accents',
    color: 'yellow',
    occasion: 'festive',
    badge: 'Bestseller',
    inStock: true,
    description: 'Radiating warmth and festive joy, this auspicious marigold yellow saree features flowing floral vines (bel) along the border and a magnificent zari-laden pallu.',
    craftDetails: 'Crafted with master resham threading along gold zari on centuries-old pit looms.',
    careInstructions: [
      'Dry clean only.',
      'Store wrapped in soft mulmul cloth.'
    ],
    specs: {
      length: '5.5 meters',
      width: '46 inches',
      blousePiece: '0.8 meter contrasting fuchsia pink silk blouse piece',
      weaveTime: '130 hours',
      origin: 'Varanasi, Uttar Pradesh'
    }
  },
  {
    id: 'ek-009',
    name: 'Rajvanshi Purple Katan Heirloom Saree',
    subtitle: 'Royal Purple Silk with Grand Temple Pallu & Zari Buttas',
    price: 58000,
    originalPrice: 65000,
    discount: '10% OFF',
    image: '/images/products/product-9-heritage-purple.png',
    images: [
      '/images/products/product-9-heritage-purple.png',
      '/images/hero/hero-slide-1.jpg',
      '/images/collections/new-arrivals.png'
    ],
    category: 'banarasi',
    fabric: '100% Certified Pure Katan Silk',
    zari: 'Rich Pure Zari Border and Pallu',
    color: 'purple',
    occasion: 'wedding',
    badge: 'Heritage Weave',
    inStock: true,
    description: 'The iconic House of Ekatra signature saree, as featured in our campaign. Deep jewel-toned royal purple silk adorned with ornate traditional motifs and shimmering gold zari.',
    craftDetails: 'Woven by fifth-generation master weavers over 24 days in the sacred weavers quarter of Varanasi.',
    careInstructions: [
      'Dry clean only with reputable luxury fabric care specialists.',
      'Change folding lines twice annually.'
    ],
    specs: {
      length: '5.5 meters',
      width: '46 inches',
      blousePiece: '0.85 meter matching purple silk with heavy sleeve border',
      weaveTime: '190 hours',
      origin: 'Varanasi, Uttar Pradesh'
    }
  }
];

export const OCCASIONS_DATA = [
  {
    id: 'weddings',
    title: 'Royal Weddings',
    subtitle: 'Grand Korvai Kanjivarams & Bridal Heirlooms',
    filterValue: 'wedding',
    image: '/images/occasions/weddings.jpg',
    tag: 'Bridal Trousseau'
  },
  {
    id: 'festive',
    title: 'Festive Celebrations',
    subtitle: 'Vibrant Marigolds, Rani Pinks & Sona Rupa Silks',
    filterValue: 'festive',
    image: '/images/occasions/festive.jpg',
    tag: 'Diwali & Puja'
  },
  {
    id: 'gifting',
    title: 'Heirloom Gifting',
    subtitle: 'Bespoke Box Presentation with Silk Certificates',
    filterValue: 'gifting',
    image: '/images/occasions/gifting.jpg',
    tag: 'Shubh Agaman'
  },
  {
    id: 'everyday',
    title: 'Everyday Elegance',
    subtitle: 'Feather-light Chanderis & Breathable Handlooms',
    filterValue: 'everyday',
    image: '/images/occasions/everyday.jpg',
    tag: 'Understated Luxury'
  }
];

export const TRUST_FEATURES = [
  {
    icon: 'handloom',
    title: 'Authentic Handloom',
    subtitle: 'Direct from Artisans',
    description: '100% genuine handloom certified weaves directly supporting generational weaving clusters.'
  },
  {
    icon: 'mandala',
    title: 'Heritage Weaves',
    subtitle: 'Banarasi • Kora • Chanderi',
    description: 'Time-honored Indian craft traditions preserved with certified pure silk and tested zari.'
  },
  {
    icon: 'shipping',
    title: 'Worldwide Shipping',
    subtitle: 'To 50+ Countries',
    description: 'Complimentary insured express delivery across India and reliable door-to-door global shipping.'
  },
  {
    icon: 'security',
    title: 'Secure Payments',
    subtitle: '100% Safe & Encrypted',
    description: 'PCI-DSS certified secure checkout with multiple payment methods and concierge support.'
  }
];
