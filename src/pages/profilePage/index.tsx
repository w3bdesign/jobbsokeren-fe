
import ApplicantInfoForm from './components/ApplicantInfoForm'
import PersonalInfoForm from './components/PersonalInfoForm'

const profilePage: React.FC = () => {
    return (
        <>
            <div className="w-full bg-zinc-100 p-2 md:p-12 grid grid-auto-rows min-content 3xl:grid-cols-10 gap-12 mt-[80px]">
                <div className="w-full 3xl:col-start-3 3xl:col-span-6  bg-white p-2 rounded-xl shadow-xl">
                    <PersonalInfoForm/>
                </div>
                <div className="w-full 3xl:col-start-3 3xl:col-span-6  bg-white p-2 rounded-xl shadow-xl">
                    <ApplicantInfoForm/>
                </div>
            </div>
        </>
    )
}

export default profilePage