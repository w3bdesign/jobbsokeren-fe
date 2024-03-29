import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';

import { storage } from '@/firebase.config';   

const useUploadFirebaseUserFile = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const uploadFile = (userId: string, file: File) => {
    return new Promise((resolve, reject) => {

         // Check if file size is larger than 5MB
         if (file.size > 5 * 1024 * 1024) {
            const error = new Error('Filen er for stor! Kan ikke være større enn 5MB.');
            setError(error);
            reject(error);
            return;
        }
        
        setIsLoading(true);
        const fileRef = ref(storage, `users_cv_storage/${userId}/${userId}.pdf`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed', 
            () => {
                // Handle progress...
            }, 
            (error) => {
                setIsLoading(false);
                setError(error);
                reject(error);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setIsLoading(false);
                    setDownloadUrl(url);
                    resolve(url);
                });
            }
        );
    });
};

const getFileUrl = async (userId: string) => {
    const fileRef = ref(storage, `users_cv_storage/${userId}/${userId}.pdf`);
    try {
      const url = await getDownloadURL(fileRef);
      return url;
    } catch (error) {
       console.log(error);
    }
  };


  return { uploadFile, getFileUrl, error, isLoading, downloadUrl };
};

export default useUploadFirebaseUserFile;
