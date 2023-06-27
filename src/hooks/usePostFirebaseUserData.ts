import { collection, setDoc, doc } from 'firebase/firestore';
import { useState } from 'react';

import { db } from '@/firebase.config';
import { FirebasePersonalUserData } from '@/models/firebasePersonalUserDataModel';

const usePostFirebaseUserData = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (collectionName: string, documentId: string, data: FirebasePersonalUserData) => {
    setIsLoading(true);
    try {
      await setDoc(doc(collection(db, collectionName), documentId), data);
      setIsLoading(false);
      return documentId;
    } catch (e) {
      setIsLoading(false);
      setError(e as Error);
      return null;
    }
  };

  return { postData, error, isLoading };
};

export default usePostFirebaseUserData;
