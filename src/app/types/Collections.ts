export interface Collections {
    id: number;
    name: string;
    images: {
      thumbnail: string[];
      default: string[];
    };
    description: string;
    price: number;
    descount?: number;
}