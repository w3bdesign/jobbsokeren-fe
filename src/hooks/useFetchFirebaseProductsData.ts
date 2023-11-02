import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import { db } from '@/firebase.config';
import { FirebaseProductsData } from '@/models/firebaseProductsDataModel';

type UseFetchProductsDataProps = {
    loading: boolean,
    error: Error | null,
    data: FirebaseProductsData[] | null
}

const useFetchFirebaseProductData = () : UseFetchProductsDataProps => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<FirebaseProductsData[] | null>(null);

    const fetchData = async () => {
        setLoading(true);
        const colRef = collection(db, 'products');
        const q = query(colRef, where('active', '==', true));

        try {
            const querySnapshot = await getDocs(q);
            const productsData = querySnapshot.docs.map(doc => {
                const data = doc.data() as FirebaseProductsData;
                return { id: doc.id, ...data };
            });
            setData(productsData);
        } catch (error) {
            console.log(error);
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchData()
    }, []);
    
    return { loading, error, data };
};

export default useFetchFirebaseProductData;
