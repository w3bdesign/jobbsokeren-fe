import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';

import SubscriptionButton from '@/components/UI/SubscribeButton';
import {FirebaseProductsData} from '@/models/firebaseProductsDataModel';

interface PricingCardProps {
    item: FirebaseProductsData;
    isActive: boolean;
    isLoading: boolean;
    onSubscriptionChange: () => void;
    checkOut: (priceId: string | undefined) => void;
}

const PricingCard = ({ item, isActive, isLoading, onSubscriptionChange, checkOut }: PricingCardProps) => {
    return (
        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl flex flex-col justify-between relative max-w-sm">
            <div>
                <span className="uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm ">{item.name}</span>
                <div>
                    <p className="text-6xl font-bold py-4 flex">{item.prices?.description}<span className="text-xl text-slate-500 flex flex-col justify-end">,–/Mnd</span></p>
                </div>
                <p className="text-2xl text-slate-500 lg:h-[120px]">{item.description}</p>
                <div className="text-2xl my-3">
                    {item.features.map((feature, index) => (
                        <p key={index} className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600"/>{feature}</p>
                    ))}
                </div>
            </div>
            <div>
                <SubscriptionButton 
                    isActive={isActive}
                    isLoading={isLoading}
                    onClick={isActive ? onSubscriptionChange : () => checkOut(item.prices?.id)}
                    buttonText={isLoading ? '...' : (isActive ? 'Ditt abonnement' : 'Kom igang!')}
                />
            </div>
        </div>
    );
};

export default PricingCard;
