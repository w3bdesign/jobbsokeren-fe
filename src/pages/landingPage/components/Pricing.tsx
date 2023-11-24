import { collection, doc, onSnapshot } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';

import LoadingDisplayer from '@/components/UI/LoadingDisplayerTransparent';
import PricingCard from '@/components/UI/PricingCard';
import { db } from '@/firebase.config';
import { useCheckout } from '@/hooks/useCheckoutStripe';
import useFetchFirebaseProductData from '@/hooks/useFetchFirebaseProductsData';
import { RootState } from '@/store/store';



interface PortalLinkResponse {
    url?: string;
}


const Pricing = () => {

    const user = useSelector((state: RootState) => state.auth.user);
    const { data: productData, error, loading } = useFetchFirebaseProductData();
    const {checkOut, error: checkOutError, loading: checkOutLoading} = useCheckout(user);
    const [subscriptionRole, setSubscriptionRole] = useState<string>('');
    const [loadingChangeSubscription, setLoadingChangeSubscription] = useState<boolean>(false);
    const [subscriptionActive, setSubscriptionActive] = useState<string>('inactive');
    

    // TODO make as a custom hook
    const changeSubscription = async () => {
        console.log('change subscription');

        if (!user) {
            return;
        }

        setLoadingChangeSubscription(true);
        
        const functions = getFunctions();
        const functionRef = httpsCallable<object, PortalLinkResponse>(functions, 'ext-firestore-stripe-payments-createPortalLink');

        functionRef({
            returnUrl: `${window.location.origin}/abonnent`,
            locale: 'auto',
        })
        .then((result) => {
            const data = result.data;

            if (data && data.url) {
                window.location.assign(data.url);
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoadingChangeSubscription(false);
        });

    }
   
    
    // this effect is used to check if the user has an active subscription 
    useEffect(() => {
            if (!user) {
                setSubscriptionActive('inactive');
                setSubscriptionRole('unregistered');
                return;
            }

            const customerDocRef = doc(db, 'customers', user.uid);
            const subscriptionColRef = collection(customerDocRef, 'subscriptions');

            onSnapshot(subscriptionColRef, (snap) => {
                snap.forEach((doc) => {
                    const data = doc.data();
                    setSubscriptionActive(data.status);
                    setSubscriptionRole(data.items[0].price.product.metadata.role);
                });
            });
    },[user]);

    return ( 
        <Element name="pricing" className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-900 absolute">
            </div>
                <div className="max-w-[1240px] m-auto py-12 relative">
                    <div className="text-center m-4 py-8 text-slate-300">
                        <h2 className="text-3xl uppercase">Priser</h2>
                        <h3 className="text-5xl font-bold text-white py-8">Finn riktig løsning for ditt behov</h3>
                        <p className="text-3xl">Vi tilbyr en rekke prispakker, inkludert en gratis løsing med litt begrenset antall, samt flere betalte pakker med mindre begrensninger.</p>
                    </div>
                    {loading ?  <LoadingDisplayer/> : 
                    <div className={`grid md:grid-cols-${productData?.length} justify-items-center`}>
                        {productData?.map((item, index) => (
                            <PricingCard 
                                key={index}
                                item={item}
                                isActive={subscriptionActive === 'active' && subscriptionRole === item.metadata.role}
                                isLoading={subscriptionActive === 'active' ? loadingChangeSubscription : checkOutLoading}
                                onSubscriptionChange={changeSubscription}
                                checkOut={checkOut}
                            />
                        ))}
                    </div>}
                </div>
        </Element>
    )
}

export default Pricing;