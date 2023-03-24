

const InputBar = () => {
    return (
        <div className="w-full h-full bg-zinc-100">
            <div className="w-[80%] justify-center mx-auto pt-4">
                <div className="md:mb-20">
                <div className="my-6">
                    <div className="my-8">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personlig info</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Denne informasjonen vil vår AI bruke for å skreddersy søknaden din i henhold til dine personlige opplysninger.</p>
                    </div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Fullt navn</label>
                    <input type="text" placeholder="Ola Norman" className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                </div>

                <div className="my-6">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">E-post</label>
                    <input type="text" placeholder="olanorman@gmail.com" className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                </div>
                <div className="my-6">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Gate adresse</label>
                    <input type="text" placeholder="Slottsparken 1" className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                </div> 

                  <div className="grid md:grid-cols-2 gap-4  my-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">By</label>
                        <input type="text" placeholder="Bergen" className="w-full mt-2 pl-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                        {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Postkode</label>
                        <input type="text" placeholder="5071" className="w-full mt-2 pl-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                        {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                    </div>
                </div>      
                    
                    
                   
                </div>
                <div>
                    <div className="my-8">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Annonse informasjon</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Legg inn tittelen på jobben du skal søke på og lenken til FINN.no Annonsen. Så order vi resten!</p>
                    </div>
                    <div className="my-6">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Jobbtittel</label>
                        <input type="text" placeholder="Utvikler" className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                        {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                    </div>
                    <div className="my-6">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">FINN.no lenke</label>
                        <input type="text" placeholder="https://www.finn.no/job/fulltime/ad.html?finnkode=255413380" className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                        {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBar