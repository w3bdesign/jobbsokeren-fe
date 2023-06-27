import { ref, deleteObject } from 'firebase/storage';
import { useState } from 'react';

import { storage } from '@/firebase.config';

interface UseDeleteFirebaseUserFileProps {
    deleteFile: (user: { uid: string } | null | undefined) => Promise<boolean>,
    error: Error | null,
    isLoading: boolean
}

const useDeleteFirebaseUserFile = (): UseDeleteFirebaseUserFileProps => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteFile = (user: { uid: string } | null | undefined): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      setIsLoading(true);
      const fileRef = ref(storage, `users_cv_storage/${user?.uid}/${user?.uid}.pdf`);
  
      deleteObject(fileRef).then(() => {
          setIsLoading(false);
          resolve(true);
      }).catch((error) => {
          setIsLoading(false);
          setError(error);
          reject(error);
      });
    });
  };

  return { deleteFile, error, isLoading };
};

export default useDeleteFirebaseUserFile;
