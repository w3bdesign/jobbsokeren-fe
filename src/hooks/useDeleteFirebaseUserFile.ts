import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { useState } from 'react';

import { storage, db } from '@/firebase.config';

interface UseDeleteFirebaseUserFileProps {
    deleteFile: (user: { uid: string } | null | undefined) => Promise<boolean>,
    error: Error | null,
    isLoading: boolean
}

const useDeleteFirebaseUserFile = (): UseDeleteFirebaseUserFileProps => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteFile = async (user: { uid: string } | null | undefined): Promise<boolean> => {
    setIsLoading(true);
    
    if (!user?.uid) {
      setError(new Error('User ID is undefined'));
      setIsLoading(false);
      return false;
    }
  
    const fileRef = ref(storage, `users_cv_storage/${user.uid}/${user.uid}.pdf`);
  
    try {
      // Delete the file
      await deleteObject(fileRef);
  
      // Delete the summary from Firestore
      const userRef = doc(db, 'cvSummaries', user.uid);
      await deleteDoc(userRef);
  
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      setError(error instanceof Error ? error : new Error(String(error)));
      return false;
    }
  };
  

  return { deleteFile, error, isLoading };
};

export default useDeleteFirebaseUserFile;
