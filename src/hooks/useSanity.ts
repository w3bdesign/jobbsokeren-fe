import { useState, useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import client from '@/sanityClient.config';

interface UseSanityDataResult<T> {
    data: T | undefined;
}

const useSanity = <T>(query: string | undefined): UseSanityDataResult<T> => {

    const [data, setData] = useState<T>();
    const { showBoundary } = useErrorBoundary();
    const errorMessage = 'Noe gikk galt i forespørselen';

    useEffect(() => {
        // fetch data from sanity
        const fetchData = async () => {
            if (!query) {
                showBoundary(new Error(errorMessage));  
                return;
            }
            try {
                const result = await client.fetch(query);
                if(result.length > 0) {
                    const data : T = result;
                    setData(data);
                } else {
                    showBoundary(new Error(errorMessage));  
                }        
            } catch(e) {
                showBoundary(new Error(errorMessage));  
            }
        }
        
        fetchData();

    }, [query, showBoundary]); 

    return {data};
}

export default useSanity;