import { useState, useEffect } from 'react';
import { FirebasePersonalUserData } from "@/models/firebasePersonalUserDataModel";
import { db } from "@/firebase.config";
import { doc, getDoc } from 'firebase/firestore';

type UseFetchUserDataProps = {
    loading: boolean,
    error: Error | null,
    data: FirebasePersonalUserData | null
}

const useFetchFirebaseUserData = (user: { uid: string } | null): UseFetchUserDataProps => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<FirebasePersonalUserData | null>(null);

    useEffect(() => {
        if (user && user.uid) {
            setLoading(true);
            const docRef = doc(db, 'personalInformation', user.uid);
            getDoc(docRef).then((docSnapshot) => {
                setLoading(false);
                if (docSnapshot.exists()) {
                    setData(docSnapshot.data() as FirebasePersonalUserData);
                } else {
                    console.log("No such document!");
                    setError(error);
                }
            }).catch((error) => {
                setError(error);
            });
        }
    }, [user]);

    return { loading, error, data };
};

export default useFetchFirebaseUserData;
