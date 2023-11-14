import { loadStripe } from '@stripe/stripe-js';
import type { User } from 'firebase/auth';
import { collection, doc, addDoc, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';

import { db } from '@/firebase.config';

const apiKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

type UseCheckoutProps = {
    loading: boolean,
    error: string | null,
    checkOut: (priceId: string | undefined) => void
}


export const useCheckout = (user: User | null) : UseCheckoutProps => {
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const checkOut = async (priceId: string | undefined) => {
        setLoading(true);
        console.log('priceId', priceId);
    
        if (!user || !priceId) {
            setError('User or price ID is missing.');
            setLoading(false);
            return;
        }
    
        try {
            const customerDocRef = doc(db, 'customers', user.uid);
            const checkoutSessionsColRef = collection(customerDocRef, 'checkout_sessions');
            const docRef = await addDoc(checkoutSessionsColRef, {
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });
    
            const unsubscribe = onSnapshot(docRef, (snap) => {
                const data = snap.data();
                if (!data) return;
    
                const { error, sessionId } = data;
                if (error) {
                    setError(`An error occurred: ${error.message}`);
                } else if (sessionId) {
                    loadStripe(apiKey).then((stripe) => {
                        if (stripe) {
                            stripe.redirectToCheckout({ sessionId });
                        } else {
                            console.error('Stripe failed to load');
                        }
                    });
                }
            });

            // Cleanup function
            return () => {
                unsubscribe();
                setLoading(false);
            };
        } catch (e) {
            setError('An error occurred while creating the checkout session.');
            setLoading(false);
        }
    };

    return { checkOut, error, loading };
};

