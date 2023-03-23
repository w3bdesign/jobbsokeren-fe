import { Price } from "../models/priceModel"

// 
export const priceData : Array<Price> = [ 
    {
        id: 1,
        title: "Basis",
        description: "Perfekt for deg som bare vil teste ut vår tjeneste, men ikke har behov for mange søknader.",
        price: 0,
        amount: 5
    },
    {
        id: 2,
        title: "Standard",
        description: "Perfekt for deg som har behov for flere søknader, men ikke har behov for veldig mange.",
        price: 39,
        amount: 50
    },
    {
        id: 3,
        title: "Premium",
        description: "Perfekt for deg som har behov for mange søknader, og ønsker å bruke tjenesten i en lengre periode.",
        price: 59,
        amount: 200
    }   
] 