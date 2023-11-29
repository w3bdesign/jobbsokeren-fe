import {  CheckCircleIcon} from '@heroicons/react/24/solid'
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


import CardImage from '@/assets/images/png/subcard.webp'
import AvatarText from '@/components/UI/AvatarText';
import DeleteButton from '@/components/UI/DeleteButton';
import LoadingDisplayer from '@/components/UI/LoadingDisplayerBackground';
import PricingCard from '@/components/UI/PricingCard';
import SubmitButton from '@/components/UI/SubmitButton';
import { db } from '@/firebase.config';
import { useCheckout } from '@/hooks/useCheckoutStripe';
import useFetchFirebaseProductData from '@/hooks/useFetchFirebaseProductsData';
import { RootState } from '@/store/store';


interface PortalLinkResponse {
    url?: string;
}

interface SubscriptionInfoProps {
    nickname: string;
    currency: string;
    product: SubscriptionProduct;
}

interface SubscriptionProduct {
    name: string;
    description: string;
    features: SubscriptionFeatures[];
}

interface SubscriptionFeatures {
    name: string;
}


const SubscriptionInfo: React.FC = () => {

    const user = useSelector((state: RootState) => state.auth.user);
    const { data: productData, error, loading } = useFetchFirebaseProductData();
    const {checkOut, error: checkOutError, loading: checkOutLoading} = useCheckout(user);
    const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfoProps>({} as SubscriptionInfoProps);
    const [subscriptionInfoLoading, setSubscriptionInfoLoading] = useState<boolean>(false);
    const [loadingChangeSubscription, setLoadingChangeSubscription] = useState<boolean>(false);

      // this effect is used to check if the user has an active subscription 
      useEffect(() => {
            if (!user) {
                return;
            }
            setSubscriptionInfoLoading(true);
            const customerDocRef = doc(db, 'customers', user.uid);
            console.log(customerDocRef);
            const subscriptionColRef = collection(customerDocRef, 'subscriptions');


            onSnapshot(subscriptionColRef, (snap) => {
                snap.forEach((doc) => {
                    console.log(doc.data());
                    const data = doc.data();
                    if (!data) {
                        setSubscriptionInfo({} as SubscriptionInfoProps);
                        return;
                    }
                    setSubscriptionInfo(data.items[0].price);
                });
            });
            setSubscriptionInfoLoading(false);
        }, [user]);



    const changeSubscription = async () => {

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

   
    if (subscriptionInfoLoading) {
        return <LoadingDisplayer/>;
    }


    return (
        <>
            {  subscriptionInfo && subscriptionInfo.product && subscriptionInfo.product.features.length > 0 ? 
            <div className="w-full">
                <div className="justify-center sm:p-28">
                    <div className="my-6 flex flex-col sm:flex-row justify-between">
                        <h2 className="mb-12 text-3xl font-bold sm:text-5xl">Mitt Abonnement</h2>
                        <div className="hidden sm:block">
                            <AvatarText name={user?.displayName} email={user?.email} image={user?.photoURL} />
                        </div>
                    </div>
                        <div className="flex my-24 flex-wrap justify-center">
                            <div className="flex flex-col max-w-sm bg-white rounded-xl shadow-xl flex-1 m-5">
                                <img className="rounded-t-lg h-[250px] w-full object-cover"
                                    src={CardImage}
                                    alt="card image" />
                                <div className="p-7 flex flex-col flex-grow">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900">{`${subscriptionInfo.product?.name} ${subscriptionInfo.nickname} ${subscriptionInfo.currency }`}</h5>
                                    <p className="py-5 text-md text-black flex-grow">{subscriptionInfo.product?.description}</p>
                                </div>
                            </div> 
                            <div className="flex flex-col max-w-sm bg-white rounded-xl shadow-xl flex-1 m-5">
                                <div className="grid self-center my-auto gap-x-6 grid-cols-1 xl:gap-x-12">
                                    {subscriptionInfo && subscriptionInfo.product && subscriptionInfo.product.features.map((feature, index) => {
                                        return (
                                            <div key={index} className="mb-12">
                                                <div className="flex">
                                                    <div className="shrink-0">
                                                        <CheckCircleIcon className="w-8 text-green-600 mx-auto pb-2" /> 
                                                    </div>
                                                    <div className="ml-2 grow">
                                                        <p className="mb-1 font-bold">{feature.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>       
                            </div>                  
                        </div>
                        <div className="sm:w-1/2 ml-auto flex gap-3">
                            <DeleteButton  handleDelete={changeSubscription}  isLoading={loadingChangeSubscription} buttonText="Avslutt abonnement"/>
                            <SubmitButton  handleClick={changeSubscription}  isLoading={loadingChangeSubscription} buttonText='Endre abonnement'/>
                        </div>
                </div>
            </div>

            :      
            
            <div className="w-full">
                 <div className="justify-center sm:p-28">
                    <div className="my-6 flex flex-col sm:flex-row justify-between">
                        <h2 className="mb-12 text-3xl font-bold sm:text-5xl">Bli Abonnement</h2>
                        <div className="hidden sm:block">
                            <AvatarText name={user?.displayName} email={user?.email} image={user?.photoURL} />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="my-8 sm:w-1/2">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Ved å bli abonnent får du er rekke fordeler!</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Et abonnementet hos oss er lett og opprette og administrere. Velg abonnement under:</p>
                        </div>
                        {loading ?  <LoadingDisplayer/> : 
                        <div className={`grid md:grid-cols-${productData?.length} justify-items-center p-10`}>
                            {productData?.map((item, index) => (
                                <PricingCard 
                                key={index}
                                item={item}
                                isActive={false}
                                isLoading={checkOutLoading}
                                onSubscriptionChange={changeSubscription}
                                checkOut={checkOut}
                                />
                            ))}
                        </div>}
                    </div>
                 </div>
            </div> 
            }
        </>
        );
    };

export default SubscriptionInfo