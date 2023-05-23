import { useState, useEffect } from 'react';
import client from '@/sanityClient.config';

interface UseSanityDataResult<T> {
    data: T | undefined;
    error: string | undefined;
}

const useSanityData = <T>(query: string | undefined): UseSanityDataResult<T> => {

    const [data, setData] = useState<T>();
    const [error, setError] = useState<string>();

    // fetch data from sanity
    const fetchData = async () => {
        if (!query) {
            setError("No query provided");
            return;
        }
        try {
            const result = await client.fetch(query);
            if(result.length > 0) {
                const data : T = result;
                setData(data);
            } else {
                setError("No data found");
            }        
        } catch(e) {
            setError("Error fetching data");
        }
    }

    useEffect(() => {
        fetchData();
    }, [query]);

    return {data, error};

}

export default useSanityData;
