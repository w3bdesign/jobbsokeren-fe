import { CheckIcon } from "@heroicons/react/24/solid";
import { Element } from 'react-scroll';

const Pricing = () => {
    // array of objects with pricing data
    const pricingArray = [ 
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

    return (
        <Element name="pricing" className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl uppercase">Priser</h2>
                    <h3 className="text-5xl font-bold text-white py-8">Finn riktig løsning for ditt behov</h3>
                    <p className="text-3xl">Vi tilbyr en rekke prispakker, inkludert en gratis løsing med litt begrenset antall, samt flere betalte pakker med mindre begrensninger.</p>
                </div>

                <div className="grid md:grid-cols-3 ">
                    {pricingArray.map((item, index) => {
                        return (
                            <div key={index} className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                                <span className="uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm ">{item.title}</span>
                                <div>
                                    <p className="text-6xl font-bold py-4 flex">{item.price}<span className="text-xl text-slate-500 flex flex-col justify-end">,–/Mnd</span></p>
                                </div>
                               <p className="text-2xl text-slate-500 lg:h-[120px]">{item.description}</p>
                               <div className="text-2xl my-3">
                                    <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600"/>{`Inkluderer ${item.amount}`} søknader </p>
                                    <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600"/>Siste generasjons AI GPT-4</p>
                                    <p className="flex py-4 "><CheckIcon className="w-8 mr-5 text-green-600"/>Nedlastbare søknader </p>
                                    <button className="w-full py-4 my-4">Kom i gang!</button>
                               </div>
                            </div> 
                        )
                    }
                    )}
                </div>

            </div>
        </Element>
    )
}

export default Pricing;