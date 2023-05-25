import React, {useState} from "react";
import TextInput from "@/components/TextInput";
import { EditorFormModel } from "@/models/editorFormModel";
import AvatarText from "@/components/AvatarText";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SubmitButton from "@/components/SubmitButton";

const textInputConfigs = [
    {
      id: "applicant_name",
      name: "applicant_name",
      autoComplete: "on",
      type: "text",
      placeholder: "Ola Norman",
      required: true,
      label: "Navn",
      width: 48,
    },
    {
      id: "applicant_email",
      name: "applicant_email",
      autoComplete: "on",
      type: "email",
      placeholder: "olanorman@gmail.com",
      required: true,
      label: "E-post",
      width: 48,
    },
    {
      id: "applicant_address",
      name: "applicant_address",
      autoComplete: "on",
      type: "text",
      placeholder: "Slottsparken 1",
      required: true,
      label: "Gateadresse",
      width: 48,
    },
    {
      id: "applicant_zip_code",
      name: "applicant_zip_code",
      autoComplete: "on",
      type: "text",
      pattern: "[0-9]*",
      minLength: 4,
      maxLength: 4,
      placeholder: "5071",
      required: true,
      label: "Postnummer",
      width: 48,
    },
    {
      id: "applicant_city",
      name: "applicant_city",
      autoComplete: "on",
      type: "text",
      placeholder: "Bergen",
      required: true,
      label: "By",
      width: 48,
    },
  ];

  const emptyFormValues: EditorFormModel = {
    applicant_name: '',
    applicant_email: '',
    applicant_address: '',
    applicant_zip_code:'',
    applicant_city: '',
    applicant_job_advertisement_url: ''
}

const ApplicantInfoForm: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    const [formValues, setFormValues] = useState<EditorFormModel>(emptyFormValues);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (
        <>
            <div className="w-full">
                <form >
                    <div className="justify-center sm:p-28">
                    <div className="my-6 flex flex-col sm:flex-row justify-between">
                        <h2 className="text-dark mb-12 text-3xl font-bold sm:text-5xl">Min profil</h2>
                        <div className="hidden sm:block">
                            <AvatarText name={user?.displayName} email={user?.email} image={user?.photoURL} />
                        </div>
                    </div>
                        <div className="mb-5">
                            
                                <div className="my-8 sm:w-1/2">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personlig jobbsøker informasjon</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Denne informasjonen vil vår AI bruke for å skreddersy søknaden din i henhold til dine personlige opplysninger.</p>
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
                        <div className="sm:w-1/3 ml-auto">
                            <SubmitButton isLoading={false} buttonText={"Lagre endringer"}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
        );
}

export default ApplicantInfoForm