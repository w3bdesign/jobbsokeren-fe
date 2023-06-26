import React, {useState, useEffect} from "react";
import TextInput from "@/components/TextInput";
import { FirebasePersonalUserData } from "@/models/firebasePersonalUserDataModel";
import AvatarText from "@/components/AvatarText";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SubmitButton from "@/components/SubmitButton";
import useFetchFirebaseUserData from "@/hooks/useFetchFirebaseUserData";
import LoadingDisplayer from "@/components/LoadingDisplayerBackground";
import ErrorDisplayer from "@/components/ErrorDisplayer";
import usePostFirebaseUserData from "@/hooks/usePostFirebaseUserData";
import SuccessBottomBanner from "@/components/SuccessBottomBanner";
import DeleteButton from "@/components/DeleteButton";
import useDeleteUser from "@/hooks/useDeleteFirebaseUserData";
import WarningModal from "@/components/WarningModal";



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

  const emptyFormValues: FirebasePersonalUserData = {
      applicant_name: '',
      applicant_email: '',
      applicant_address: '',
      applicant_zip_code: '',
      applicant_city: '',
      applicant_cv_summary: '',
  }

const PersonalInfoForm: React.FC = () => {

    const user = useSelector((state: RootState) => state.auth.user);
    const [formValues, setFormValues] = useState<FirebasePersonalUserData>(emptyFormValues);
    const { loading, error, data } = useFetchFirebaseUserData(user, 'personalInformation');
    const {loading: loadingDelete, error: errorDelete, success: successDelete, deleteUserAndData } = useDeleteUser();
    const { postData, isLoading : postLoading,  error: postError } = usePostFirebaseUserData();
    const [success, setSuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);

   
    useEffect(() => {
        if (data) {
            setFormValues(data);
        }
    }, [data]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(user) {
          await postData('personalInformation', user.uid, formValues);
          setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        }
      };

      const handleDelete = () => {
        setShowModal(true);
    }
    
    
    return (
        <>
            {loading && <LoadingDisplayer />}
            {error && <ErrorDisplayer title={"Feil!"} errorMessage="Det skjedde en feil når vi prøvde å hente din profil. Prøv igjen senere"  errorCode={500}  />}
            <WarningModal  
                show={showModal} 
                setShow={setShowModal} 
                title={"Er du sikker på at du vil slette din bruker?"} 
                confirmMessage={"Ja, slett min bruker"} 
                closeMessage={"Nei, behold min bruker"}
                onConfirm={() => {
                    deleteUserAndData(user);
                    setShowModal(false);
                }} 
                onCancel={() => setShowModal(false)} 
                />

            <div className="w-full">
                <form onSubmit={handleSubmit} >
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
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Denne informasjonen vil vår AI bruke for å skreddersy søknaden din i henhold til dine personlige opplysninger. Du slipper da å fylle ut dette i jobbsøkeren.</p>
                                </div>
                            <div className="flex flex-wrap justify-between">
                            {textInputConfigs.map((textInputConfig, index) => (
                                <TextInput
                                    key={index}
                                    id={textInputConfig.id}
                                    name={textInputConfig.name}
                                    value={formValues[textInputConfig.id as keyof FirebasePersonalUserData]}
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
                        <div className="sm:w-1/2 ml-auto flex gap-3">
                            <DeleteButton handleDelete={handleDelete} isLoading={loadingDelete} buttonText="Slett min bruker"/>
                            <SubmitButton isLoading={postLoading} buttonText={"Lagre endringer"}/>
                        </div>
                    </div>
                </form>
            </div>
            <SuccessBottomBanner success={success} text="Din profil er oppdatert!" />
            <SuccessBottomBanner success={successDelete} text="Din profil er nå slettet!" />
        </>
        );
    };

export default PersonalInfoForm