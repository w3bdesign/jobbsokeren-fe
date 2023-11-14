import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import { db } from '@/firebase.config';
import { FirebaseProductsData, FirebaseProductsDataPrice } from '@/models/firebaseProductsDataModel';

type UseFetchProductsDataProps = {
    loading: boolean,
    error: Error | null,
    data: FirebaseProductsData[] | null
}

const useFetchFirebaseProductData = (): UseFetchProductsDataProps => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<FirebaseProductsData[] | null>(null);

    const fetchData = async () => {
        setLoading(true);
        const colRef = collection(db, 'products');
        const q = query(colRef, where('active', '==', true));

        try {
            const querySnapshot = await getDocs(q);
            const productsDataPromises = querySnapshot.docs.map(async (doc) => {
                const productData = doc.data() as FirebaseProductsData;
                const productRef = doc.ref;
                const pricesSnapshot = await getDocs(collection(productRef, 'prices'));
                const pricesData = pricesSnapshot.docs.map((priceDoc) => {
                    const priceData = priceDoc.data() as FirebaseProductsDataPrice;
                    return { id: priceDoc.id, ...priceData };
                });

                return { ...productData, id: doc.id, prices: pricesData.length > 0 ? pricesData[0] : null };
            });

            const updatedProductsData = await Promise.all(productsDataPromises);
            setData(updatedProductsData);

        } catch (error) {
            console.log('Error fetching products:');
            setError(error as Error); // Type assertion added here
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return { loading, error, data };
};

export default useFetchFirebaseProductData;
