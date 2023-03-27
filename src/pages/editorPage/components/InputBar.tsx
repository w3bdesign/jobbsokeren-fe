import {EditorFormPropsModel} from "@/models/editorFormPropsModel";


const InputBar : React.FC<EditorFormPropsModel> = ( { formValues, handleInputChange, handleSubmit}) => {
      
    return (
        <div className="w-full h-full bg-zinc-100">
            <form onSubmit={handleSubmit}>
                <div className="w-[80%] justify-center mx-auto pt-4">
                    <div className="md:mb-20">
                        <div className="my-6">
                            <div className="my-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personlig info</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Denne informasjonen vil vår AI bruke for å skreddersy søknaden din i henhold til dine personlige opplysninger.</p>
                            </div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Fullt navn</label>
                            <input 
                                name="name" 
                                autoComplete="on" 
                                type="text" 
                                placeholder="Ola Norman"
                                value={formValues.name}
                                onChange={handleInputChange}
                                className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                            {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                        </div>

                        <div className="my-6">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">E-post</label>
                            <input name="email" 
                                autoComplete="on" 
                                type="email" 
                                placeholder="olanorman@gmail.com" 
                                value={formValues.email}
                                onChange={handleInputChange}
                                className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                        </div>
                        <div className="my-6">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Gate adresse</label>
                            <input 
                                name="address"  
                                autoComplete="on" 
                                type="text" 
                                placeholder="Slottsparken 1" 
                                value={formValues.address}
                                onChange={handleInputChange}
                                className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                        </div> 

                        <div className="grid md:grid-cols-2 gap-4  my-6">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">By</label>
                                <input 
                                    name="city" 
                                    autoComplete="on" 
                                    type="text" 
                                    placeholder="Bergen"
                                    value={formValues.city}
                                    onChange={handleInputChange}
                                    className="w-full mt-2 pl-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                            </div>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Postkode</label>
                                <input 
                                    name="postalcode" 
                                    autoComplete="on" 
                                    type="number" 
                                    placeholder="5071"
                                    value={formValues.postalcode}
                                    onChange={handleInputChange}
                                    className="w-full mt-2 pl-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                            </div>
                        </div>      
                            
                        </div>
                        <div>
                            <div className="my-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Annonse informasjon</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Legg inn lenken til FINN.no Annonsen. Så order vi resten!</p>
                            </div>
                            {/* <div className="my-6">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Jobbtittel</label>
                                <input 
                                    name="jobtitle"
                                    type="text" 
                                    placeholder="Utvikler"
                                    value={formValues.jobtitle}
                                    onChange={handleInputChange}
                                    className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                            </div> */}
                            <div className="my-6">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">FINN.no lenke</label>
                                <input
                                    name="finnlink" 
                                    type="text" 
                                    placeholder="https://www.finn.no/job/fulltime/ad.html?finnkode=255413380"
                                    value={formValues.finnlink}
                                    onChange={handleInputChange}
                                    className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                            </div>
                        <div>
                            <button type="submit" className="w-full py-4 my-4 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 rounded-md">Generer søknad</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InputBar