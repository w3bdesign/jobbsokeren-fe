import { UseInputBar } from './useInputBar';
import TextInput from '../../../../components/TextInput';
import SubmitButton  from '@/components/SubmitButton';
import { EditorFormModel } from '@/models/editorFormModel';


const textInputConfigs = [
    {
      id: 'applicant_name',
      name: 'applicant_name',
      autoComplete: 'on',
      type: 'text',
      placeholder: 'Ola Norman',
      required: true,
      label: 'Navn',
      width: 100,
    },
    {
      id: 'applicant_email',
      name: 'applicant_email',
      autoComplete: 'on',
      type: 'email',
      placeholder: 'olanorman@gmail.com',
      required: true,
      label: 'E-post',
      width: 100,
    },
    {
      id: 'applicant_address',
      name: 'applicant_address',
      autoComplete: 'on',
      type: 'text',
      placeholder: 'Slottsparken 1',
      required: true,
      label: 'Gateadresse',
      width: 100,
    },
    {
      id: 'applicant_zip_code',
      name: 'applicant_zip_code',
      autoComplete: 'on',
      type: 'text',
      pattern: '[0-9]*',
      minLength: 4,
      maxLength: 4,
      placeholder: '5071',
      required: true,
      label: 'Postnummer',
      width: 48,
    },
    {
      id: 'applicant_city',
      name: 'applicant_city',
      autoComplete: 'on',
      type: 'text',
      placeholder: 'Bergen',
      required: true,
      label: 'By',
      width: 48,
    },
  ];


const InputBar : React.FC = () => {
    const {
        formValues,
        editorIsLoading,
        handleInputChange,
        handleSubmit,
    } = UseInputBar();

    return (
        <div className="w-full md:max-w-[650px] bg-zinc-100 ">
            <form onSubmit={handleSubmit}>
                <div className="w-[80%] justify-center mx-auto pt-4">
                    <div className="md:mb-20">
                        <div className="my-6">
                            <div className="my-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personlig info</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Denne informasjonen vil vår AI bruke for å skreddersy søknaden din i henhold til dine personlige opplysninger.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between">
                        {textInputConfigs.map((textInputConfig, index) => (
                            <TextInput
                                key={index}
                                id={textInputConfig.id}
                                name={textInputConfig.name}
                                value={formValues[textInputConfig.id as keyof EditorFormModel]}
                                autoComplete={textInputConfig.autoComplete}
                                type={textInputConfig.type}
                                placeholder={textInputConfig.placeholder}
                                onChange={handleInputChange}
                                required={textInputConfig.required}
                                label={textInputConfig.label}
                                width={textInputConfig.width}/>
                            ))}
                        </div>
                        </div>
                        <div>
                            <div className="my-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Annonse informasjon</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Legg inn lenken til FINN.no Annonsen. Så ordner vi resten!</p>
                            </div>
                            <TextInput
                                id="applicant_job_advertisement_url"
                                name="applicant_job_advertisement_url"
                                autoComplete="on"
                                type="text"
                                pattern="https://www.finn.no/job/.*"
                                placeholder="https://www.finn.no/job/fulltime/ad.html?finnkode=255413380"
                                value={formValues.applicant_job_advertisement_url}
                                onChange={handleInputChange}
                                required
                                label="FINN.no lenke"
                                width={100}/>   
                            <SubmitButton
                                isLoading={editorIsLoading}
                                buttonText="Generer søknad"/>
                    </div>    
                </div>
            </form>
        </div>
    )
}

export default InputBar