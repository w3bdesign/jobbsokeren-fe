export interface FirebaseProductsData {
    active: boolean;
    description: string;
    id?: string;
    images: string[];
    metadata: Record<string, unknown>;
    name: string;
    role: string | null;
    tax_code: string;
    price: FirebaseProductsDataPrice;
    order: number;
}

interface FirebaseProductsDataPrice {
    active: boolean;
    currency: string;
    id?: string;
    unit_amount: number;
    description: string;

}