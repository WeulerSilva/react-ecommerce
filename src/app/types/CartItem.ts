export interface CartItem {
    id: number;
    name: string;
    images: {
      thumbnail: string[];
      default: string[];
    };
    description: string;
    price: number;
    descount?: number;
    cartProduct: number;
  }
  
  export interface Cart {
    collections: CartItem[];
    men: CartItem[];
    women: CartItem[];
  }