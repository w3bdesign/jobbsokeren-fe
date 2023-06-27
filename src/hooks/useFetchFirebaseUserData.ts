import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import { db } from '@/firebase.config';
import { FirebasePersonalUserData } from '@/models/firebasePersonalUserDataModel';

type UseFetchUserDataProps = {
    loading: boolean,
    error: Error | null,
    data: FirebasePersonalUserData | null
}

const useFetchFirebaseUserData = (user: { uid: string } | null, database: string): UseFetchUserDataProps => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<FirebasePersonalUserData | null>(null);

    useEffect(() => {
        if (user && user.uid) {
            setLoading(true);
            const docRef = doc(db, database, user.uid);
            getDoc(docRef).then((docSnapshot) => {
                setLoading(false);
                if (docSnapshot.exists()) {
                    setData(docSnapshot.data() as FirebasePersonalUserData);
                } else {
                    console.log('No such document!');                 
                }
            }).catch((error) => {
                setError(error);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [user,database]);
    

    return { loading, error, data };
};

export default useFetchFirebaseUserData;
