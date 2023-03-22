import { CheckBadgeIcon, CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid"
import { Element } from 'react-scroll';


const AllInOne = () => {

    const aiAttributes = [
        {
            title: "Spar tid på å skrive jobbsøknader",
            description: "Vår AI kan hjelpe deg med å lage en grunnleggende mal for jobbsøknaden din på kort tid. Dette kan være spesielt nyttig hvis du sender mange søknader på en gang."

        },
        {
            title: "Få en konkret mal",
            description: "En AI-drevet jobbsøknadsgenerator kan hjelpe deg med å lage en mal for søknaden din som inneholder alle de viktige elementene arbeidsgivere ser etter."

        },
        {
            title: "Identifiser nøkkelord",
            description: "AI kan hjelpe deg med å identifisere nøkkelord og uttrykk som arbeidsgivere ser etter når de skanner søknader. Dette kan øke sjansene dine for å bli lagt merke til av en arbeidsgiver."

        },
        {
            title: "Tilpasset språk",
            description: "AI kan hjelpe deg med å skrive søknaden din ved hjelp av et språk som er tilpasset jobbannonsen og arbeidsgiverens språkbruk."

        },
        {
            title: "Unngå skrivefeil",
            description: "En AI-basert skriveassistent kan hjelpe deg med å unngå skrivefeil og grammatiske feil i søknaden din."

        },
        {
            title: "Unngå for mye bruk av klisjeer",
            description: " AI kan hjelpe deg med å unngå overbruk av klisjeer og standardfraser som kan redusere verdien av søknaden din."

        },
        {
            title: "Forbedre språklig stil",
            description: "AI kan hjelpe deg med å forbedre språklig stil og tone i søknaden din."

        },
        {
            title: "Tilpasse søknaden til jobbannonsen",
            description: " Ved å analysere jobbannonsen kan AI hjelpe deg med å tilpasse søknaden din til de spesifikke kravene i stillingen du søker på."
        }
  
    ]


    return (
       <Element name="platforms" className="flex justify-center items-center w-full my-32 md:h-[1300px]">
            <div className="max-w-[1240px] px-2">
                <h2 className="text-5xl font-bold text-center">Hva vår AI løsning kan tilby</h2>
                <p className="text-2xl py-8 text-gray-500 text-center">Det er viktig å huske på at det å bruke AI til å skrive jobbsøknader ikke erstatter behovet for å tilpasse søknaden din til den spesifikke jobben du søker på og arbeidsgiverens behov. Men med riktig tilnærming kan AI være en nyttig ressurs i jobbsøknadsprosessen.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14  pt-12 ">
                {aiAttributes.map((item, index) => {
                    return (
                        <div key={index} className="border rounded-xl shadow-xl relative ">
                             <div className="absolute mx-auto w-full  mt-[-2rem]">
                                    <CheckCircleIcon className="w-16 text-indigo-600 mx-auto pb-2" />  
                                </div> 
                            <div className="p-8 mt-5">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="text-lg pt-2 pb-4">{item.description}</p>
                            </div>
                        </div>
                    )
                } )}
                </div>
            </div> 
       </Element>
    )
}

export default AllInOne