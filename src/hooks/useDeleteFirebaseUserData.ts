import { useState } from 'react';
import { GoogleAuthProvider, reauthenticateWithPopup } from "firebase/auth";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from "@/firebase.config";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import { User } from "firebase/auth";
import { logout } from '@/store/slices/authentication/authSlice';


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
    const deleteUserAndData = async (user: { uid: string } | null) => {
      
        if (user && user.uid) {
            setLoading(true);
            const userRef = doc(db, 'personalInformation', user.uid);
            try {
                // Delete user data from Firestore
                await deleteDoc(userRef);
                
                if (authUser) {
                    authUser.delete().then(() => {
                        console.log("User deleted");
                        dispatch(logout());
                    }).catch((error) => {
                        if (error.code === 'auth/requires-recent-login') {
                            // The user's last sign-in time does not meet the security threshold. 
                            // You must prompt the user to reauthenticate.
                            reauthenticateUser(authUser);
                        } else {
                            setError("Det skjedde en feil under sletting av bruker. Prøv igjen senere.");
                        }
                    });
                } else {
                    setError("Det skjedde en feil under sletting av bruker. Prøv igjen senere.");
                }
                setSuccess(true);
            } catch (error) {
                setError("Det skjedde en feil under sletting av bruker. Prøv igjen senere.");
            } finally {
                setLoading(false);
            }
        }
    };

    const reauthenticateUser = async (user: User) => {
        // Prompt the user to reauthenticate. Here's an example using Google Auth provider.
        const provider = new GoogleAuthProvider();
        await reauthenticateWithPopup(user, provider).then(() => {
            // User reauthenticated.
            deleteUserAndData(user);
        }).catch((error) => {
            // Handle error.
            console.log("Error reauthenticating user", error);
        });
    };

    return { loading, error, success, deleteUserAndData };
};

export default useDeleteUser;
