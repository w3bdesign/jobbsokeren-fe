import { CheckIcon } from '@heroicons/react/24/solid';
//import { loadStripe } from '@stripe/stripe-js';
import { collection, doc, addDoc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';

import ButtonLoadingIndicator from '@/components/UI/ButtonLoadingIndicator';
import { db } from '@/firebase.config';
import { useCheckout } from '@/hooks/useCheckoutStripe';
import useFetchFirebaseProductData from '@/hooks/useFetchFirebaseProductsData';
import { RootState } from '@/store/store';


const Pricing = () => {


   // const apiKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
    const user = useSelector((state: RootState) => state.auth.user);
    const { data, error, loading } = useFetchFirebaseProductData();
    const {checkOut, error: checkOutError, loading: checkOutLoading} = useCheckout(user);
    const [subscriptionRole, setSubscriptionRole] = useState<string>('');
    const [subscriptionActive, setSubscriptionActive] = useState<string>('inactive');
    const sortedData = data ? [...data].sort((a, b) => a.order - b.order) : null;


    const baseButtonClass ='w-full py-4 my-4 text-white transition duration-300 border bg-indigo-600 border-indigo-600 hover:text-indigo-600 hover:border-indigo-600 rounded-md';
    const buttonLoading = checkOutLoading ? 'hover:bg-indigo-600' : 'hover:bg-transparent';

    
    useEffect(() => {
            if (!user) {
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
            }
    , [user]);

    if (loading) {
        return <div>Loading products...</div>; 
    }

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
                    <div className="grid md:grid-cols-3 ">
                        {sortedData?.map((item, index) => {
                            return (
                                <div key={index} className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl flex flex-col justify-between relative">
                                    <div>
                                        <span className="uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm ">{item.name}</span>
                                        <div>
                                            <p className="text-6xl font-bold py-4 flex">{item.prices?.description }<span className="text-xl text-slate-500 flex flex-col justify-end">,–/Mnd</span></p>
                                        </div>
                                        <p className="text-2xl text-slate-500 lg:h-[120px]">{item.description}</p>
                                        <div className="text-2xl my-3">
                                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600"/>{`Inkluderer ${item.name}`} søknader </p>
                                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600"/>Siste generasjons AI GPT-4</p>
                                            <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600"/>Nedlastbare søknader </p>
                                        </div>
                                    </div>
                                    <div>
                                    {subscriptionActive === 'active' && subscriptionRole === item.metadata.role ? (
                                            <button disabled className="w-full py-4 my-4 bg-green-600 text-white border-gray-200 hover:border-green-700 cursor-not-allowed">Ditt abonnent</button>
                                        ) : (
                                            <button disabled={checkOutLoading} onClick={() => checkOut(item.prices?.id)} className={`${baseButtonClass} ${buttonLoading}`}>
                                                 {checkOutLoading ? <ButtonLoadingIndicator/> : (user ? 'Bytt abonnent' : 'Kom igang!')}
                                            </button>
                                        )}
                                    </div>
                                </div> 
                            )
                        })}
                    </div>
                </div>
            

            
        </Element>
    )
}

export default Pricing;