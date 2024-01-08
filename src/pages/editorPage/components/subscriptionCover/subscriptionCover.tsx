import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Login from '@/components/Authentication/Login';
import { db } from '@/firebase.config';
import { loginFailure, loginSuccess } from '@/store/slices/authentication/authSlice';
import { RootState } from '@/store/store';

const SubscriptionCover : React.FC = () => {

    const user = useSelector((state: RootState) => state.auth.user);
    const submitCount = useSelector((state: RootState) => state.editorSubmitCount.value);
    const editorIsLoading = useSelector((state: RootState) => state.editorIsLoading.value);
    const dispatch = useDispatch();
    const auth = getAuth();
    const navigate = useNavigate();
    const [displaySubscriptionModal, setDisplaySubscriptionModal] = useState<boolean>(true);
    const [subscriptionActive, setSubscriptionActive] = useState<boolean>(false);

    const authAndRedirect = async () => {
        // If user is not logged in, authenticate them and authenticate them 
        //else redirect them to the subscription page
        if (!user) {
            try {
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                const signedInUser = result.user;
                dispatch(loginSuccess(signedInUser));
                navigate('/abonnent');
            } catch (e) {
                dispatch(loginFailure('An error occurred while authenticating.'));
                return;
            }
        } else {
            navigate('/abonnent');
        }
    }

    // this effect is used to check if the user has an active subscription
    // and if they do, hide the subscription modal
    // and if they don't, show the subscription modal
    useEffect(() => {

        if (!user) {
            setSubscriptionActive(false);
        } else {
            const customerDocRef = doc(db, 'customers', user.uid);
            const subscriptionColRef = collection(customerDocRef, 'subscriptions');
    
            onSnapshot(subscriptionColRef, (snap) => {
                snap.forEach((doc) => {
                    const data = doc.data();
                    if (data.status === 'active') {
                        setSubscriptionActive(true);
                    }
                });
            });
        }

        if (submitCount > 0 && !editorIsLoading && !subscriptionActive) {
            setDisplaySubscriptionModal(false);
        } else {
            setDisplaySubscriptionModal(true);
        }
        
    }, [submitCount, editorIsLoading, user, subscriptionActive]);
    

    return (
       <div hidden={displaySubscriptionModal} className="absolute pb-9 rounded-md z-10 bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-white/10 via-white/40 to-white/90">
            <div className="w-full h-full flex justify-center items-end">
                <div className="relative text-gray-300" id="pricing">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <div className="flex flex-col items-center aspect-auto p-4 
                                sm:p-8 border rounded-xl bg-slate-900 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                                <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Du trenger mer tilgang</h2>
                                <p className="text-lg sm:text-xl text-center mb-6 mt-4">
                                <span className="text-3xl sm:text-4xl font-bold text-white">fra 49 ,–</span> 
                                </p>
                                <p className="text-center mb-6">
                                    Få tilgang til alle våre fantastiske tjenester! Bli abonnement. 
                                    {!user &&  
                                        <Login>
                                            <span className='ml-1'>Har du abonnement?</span>
                                            <span className='ml-1 text-indigo-600 underline hover:cursor-pointer'>
                                                Logg inn
                                            </span>
                                        </Login>    
                                    }
                                </p> 
                                <button 
                                    onClick={authAndRedirect} 
                                    className="mt-auto hover:bg-zinc-100 inline-flex items-center px-8 py-3 text-center text-white">
                                        Se tilbud
                                        <ArrowRightIcon className="w-4 ml-3 inline-block" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
       </div>
    )
}

export default SubscriptionCover;