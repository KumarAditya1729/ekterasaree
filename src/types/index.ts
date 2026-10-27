export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  images?: string[];
  category: 'banarasi' | 'kanjivaram' | 'kora' | 'chanderi' | 'handloom' | 'festive';
  fabric: string;
  zari: string;
  color: 'purple' | 'red' | 'green' | 'gold' | 'blue' | 'pink' | 'black' | 'yellow';
  occasion: 'wedding' | 'festive' | 'gifting' | 'everyday' | 'party';
  badge?: 'Bestseller' | 'Heritage Weave' | 'Pure Silk Mark' | 'New Arrival' | 'GI Tagged';
  inStock: boolean;
  description: string;
  craftDetails: string;
  careInstructions: string[];
  specs: {
    length: string;
    width: string;
    blousePiece: string;
    weaveTime: string;
    origin: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  unstitchedBlouse: boolean;
}

export interface CollectionItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  itemCount: number;
}

export interface HeroSlide {
  id: number;
  ornament: string;
  titleLines: string[];
  subtitle: string;
  description: string;
  ctaText: string;
  secondaryCtaText: string;
  image: string;
  altText: string;
  tag: string;
}

export interface FilterState {
  searchQuery: string;
  category: string;
  color: string;
  occasion: string;
  priceMax: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'popular';
}
