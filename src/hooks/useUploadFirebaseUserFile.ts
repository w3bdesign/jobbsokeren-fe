import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from "@/firebase.config";   

const useUploadFirebaseUserFile = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const uploadFile = (userId: string, file: File) => {
    return new Promise((resolve, reject) => {

         // Check if file size is larger than 5MB
         if (file.size > 5 * 1024 * 1024) {
            const error = new Error('File is too large. Please upload a file smaller than 5MB.');
            setError(error);
            reject(error);
            return;
        }
        
        setIsLoading(true);
        const fileRef = ref(storage, `users_cv_storage/${userId}/${file.name}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
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


  return { uploadFile, error, isLoading, downloadUrl };
};

export default useUploadFirebaseUserFile;
