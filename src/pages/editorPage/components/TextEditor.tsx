import { Editor } from '@tinymce/tinymce-react';
import React, {useState, useEffect} from 'react';
import { EditorFormPropsModel } from '@/models/editorFormModel';
import {ThreeCircles} from 'react-loader-spinner'

// inputValuesModel is a type that is defined in models/inputValuesModel.ts
// it is used to define the type of the states object
const TextEdtiors : React.FC<EditorFormPropsModel> = ({formValues, formSubmited, setFormSubmited} )  =>  {

    const {name, email, address, city, postalcode, jobtitle} = formValues;
    const [initialValue, setInitialValue] = useState("<h1>Fyll ut skjemaet til venstre for å generere søknaden</h1>");
    const [loading, setLoading] = useState(false);
   
      useEffect(() => {
       
        if (formSubmited) {
          // wrap in setTimeout to simulate async call
          setInitialValue("");
          setLoading(true);
          setTimeout(() => {
            setInitialValue(initValueEditor);
            setLoading(false);
            setFormSubmited(false);
          }, 2500);
        }
      }, [formSubmited]);

  //   const jobTitleUpperCase = jobtitle.toUpperCase();
     const todaysDate = new Date().toLocaleDateString();
     const firmName = "Firma AS";
     const firmAddress = "Firmaveien 1";
     const firmPostalcode = "0001 Oslo";
     const initValueEditor = `
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
     
   
    
    return (
        <div className='h-full relative'>
          {loading && 
            <div className='h-full absolute w-full z-40 grid'>
              <ThreeCircles
                  height="100"
                  width="100"
                  color="#4f46e5"
                  wrapperStyle={{}}
                  wrapperClass="m-auto "
                  visible={loading}
                  ariaLabel="three-circles-rotating"
                
              />
            </div>
          }
          <div className='p-2 bg-zinc-100 h-full '>
            <Editor
              initialValue={initialValue}
              init={{
                menubar: true,
                content_css: "./src/pages/editorPage/components/TextEditor.css",
                height: "100%",
                importcss_append: true,
                plugins: [
                  'importcss advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace visualblocks code',
                  'insertdatetime media table paste wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright | \
                  bullist numlist outdent indent | help'
              }}
            />
          </div>
        </div>
     
      );
}

export default TextEdtiors