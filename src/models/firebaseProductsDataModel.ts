export interface FirebaseProductsData {
    features: string[];
    active: boolean;
    description: string;
    id?: string;
    images: string[];
    metadata: Record<string, unknown>;
    name: string;
    role: string | null;
    tax_code: string;
    prices: FirebaseProductsDataPrice | null;
    order: number;
}

export interface FirebaseProductsDataPrice {
    active: boolean;
    currency: string;
    id?: string;
    unit_amount: number;
    description: string;

}