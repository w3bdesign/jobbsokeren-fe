import { EditorFormModel } from "@/models/editorFormModel";

    const useContent = ( {name, email, address, city, postalcode, jobtitle} : EditorFormModel) => {
        
        const todaysDate = new Date().toLocaleDateString();
        const firmName = "Firma AS";
        const firmAddress = "Firmaveien 1";
        const firmPostalcode = "0001 Oslo";
        const content = `
        <div class="personalInfoDiv">   
           <p> ${name} </p> 
           <p> ${address} </p> 
           <p> ${postalcode} ${city} </p> 
           <p> ${email} </p> 
         </div>
         <div class="firmInfoDiv">
           <p> ${firmName} </p>
           <p> ${firmAddress} </p>
           <p> ${firmPostalcode} </p>
         </div>
         <p class="todaysDate"> ${todaysDate} </p>
        <h2>SØKNAD PÅ LEDIG STILLING SOM ${jobtitle} </h2>
        <div class="jobDescriptionDiv">
           <p>      Viser til utlyst stilling som administrativ konsulent på Finn 3.januar 2020. Kvalifikasjonene i stillingsbeskrivelsen stemmer godt overens med min bakgrunn og kompetanse som vedlagte CV viser.
           </p>
           <p>
           I hele min karriere har jeg opprettholdt en høy standard i mine prestasjoner med et mangfoldig utvalg av administrative funksjoner. Dette understrekes tydelig av mine tidligere suksesser. Som assistent til økonomidirektør i Bedrift AS, strømlinjeformet jeg drift og reduserte dermed kostnader ved å konsolidere drift og forhandle konkurransedyktige priser med tjenesteleverandører. I tillegg lettet jeg gjennomføringen av en ny salgsfremmende strategi som betydelig økte selskapets profil, da jeg var assistent til en direktør i Firma 2 AS.
           Videre kvalifikasjoner inkluderer:
   
           </p>
           <ul>
             <li>
             Sterk breddekunnskap i kontoradministrasjon, fra planlegging av møter, organisere reise til budsjetthåndtering og regnskapsfunksjoner
             </li>
             <li>
             Evne til å utvikle og vedlikeholde omfattende administrative prosesser som forbedrer effektiviteten i den daglige driften
             </li>
             <li>
             Jeg har på en suksessfull måte vært en støttespiller for ansatte på direktørnivå samt for administrerende direktører
             </li>
           </ul>
           <p>
           Med gode organisatoriske og kommunikasjonsevner, en fremragende arbeidsmoral, og evnen til å arbeide både i team og i selvstyrte miljøer, har jeg evne til å møte de forventninger dere måtte ha. Jeg håper å få muligheten til å stille til et intervju slik at vi kan diskutere mine kvalifikasjoner nærmere. 
           </p>
         </div>
         <div class="signatureDiv">
         <p> Med vennlig hilsen, </p>
         <p> ${name} </p>
         </div>
        `;

        return {
            content
        }
    }



    export default useContent;