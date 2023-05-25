
import PersonalInfoForm from "./components/PersonalInfoForm"
import ApplicantInfoForm from "./components/ApplicantInfoForm"

const profilePage: React.FC = () => {
    return (
        <>
            <div className="w-full bg-zinc-100 p-2 md:p-16 gap-4 grid grid-rows-2 mt-[20px] place-items-center">
                <div className="w-full bg-white p-2 rounded-xl shadow-xl">
                    <PersonalInfoForm/>
                </div>
                <div className="w-full bg-white p-2 md:p-16  rounded-xl shadow-xl">
                    <ApplicantInfoForm/>
                </div>
            </div>
        </>
    )
}

export default profilePage