import { GoogleAuthProvider, reauthenticateWithPopup } from 'firebase/auth';
import { User } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { db } from '@/firebase.config';
import { logout } from '@/store/slices/authentication/authSlice';
import { RootState } from '@/store/store';




type UseDeleteUserProps = {
    loading: boolean,
    error: string | null,
    success: boolean,
    deleteUserAndData: (user: { uid: string } | null) => void
}


const useDeleteUser = (): UseDeleteUserProps => {
    const dispatch = useDispatch();
    const authUser = useSelector((state: RootState) => state.auth.user) as User | null;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const errorMessage = 'Det skjedde en feil under sletting av bruker. Prøv igjen senere.';

    const deleteUserAndData = async (user: { uid: string } | null) => {
      
        if (user && user.uid) {
            setLoading(true);
            const userRef = doc(db, 'personalInformation', user.uid);
            try {
                // Delete user data from Firestore
                await deleteDoc(userRef);
                
                if (authUser) {
                    authUser.delete().then(() => {
                        dispatch(logout());
                    }).catch((error) => {
                        if (error.code === 'auth/requires-recent-login') {
                            // The user's last sign-in time does not meet the security threshold. 
                            // You must prompt the user to reauthenticate.
                            reauthenticateUser(authUser);
                        } else {                          
                            setError(errorMessage);
                        }
                    });
                } else {
                    setError(errorMessage);
                }
                setSuccess(true);
            } catch (error) {
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        }
    };

    const reauthenticateUser = async (user: User) => {
        // Prompt the user to reauthenticate.
        const provider = new GoogleAuthProvider();
        await reauthenticateWithPopup(user, provider).then(() => {
            // User reauthenticated.
            deleteUserAndData(user);
        }).catch((error) => {
            // Handle error.
            console.log('Error reauthenticating user', error);
        });
    };

    return { loading, error, success, deleteUserAndData };
};

export default useDeleteUser;
