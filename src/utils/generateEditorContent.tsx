import { FetchedDataModel  } from "@/models/fetchedDataModel";

    const generateEditorContent = ( { 
        employer_job_title,
        employer_name,
        employeer_address,
        employer_zip_code,
        applicant_name,
        applicant_email,
        applicant_address,
        applicant_city,
        applicant_zip_code,
    } : FetchedDataModel) => {
      
        const todaysDate = new Date().toLocaleDateString();
        const content = `
        <div class="personalInfoDiv">   
           <p> ${applicant_name} </p> 
           <p> ${applicant_address} </p> 
           <p> ${applicant_zip_code} ${applicant_city} </p> 
           <p> ${applicant_email} </p> 
         </div>
         <div class="firmInfoDiv">
           <p> ${employer_name} </p>
           <p> ${employeer_address} </p>
           <p> ${employer_zip_code} </p>
         </div>
         <p class="todaysDate"> ${todaysDate} </p>
        <h2>SØKNAD PÅ LEDIG STILLING SOM ${employer_job_title} </h2>
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
         <p> ${applicant_name} </p>
         </div>
        `;

        return {
            content
        }
    }



    export default generateEditorContent;