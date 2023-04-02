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
        applicant_cover_letter,
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
        <h2 style="text-transform: uppercase">SØKNAD PÅ LEDIG STILLING SOM ${employer_job_title} </h2>
        <div class="jobDescriptionDiv">
            ${applicant_cover_letter} 
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