export interface Inventory {
    id: number;
    make: string;
    model: string;
    year: number;
    images: string[];
    image_url: string;
    description: string;
    price: number;
    owner: string;
    file_url: string;
    file: string;
    isDone: boolean;
}