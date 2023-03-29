import InputBar from "./components/InputBar"
import TextEditor from "./components/TextEditor"
import { useState } from "react"
import { EditorFormModel} from "@/models/editorFormModel"

const EditorPage = () => {

    const [formSubmited, setFormSubmited] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<EditorFormModel>({
        name: '',
        email: '',
        address: '',
        city: '',
        postalcode: '',
        jobtitle: 'WEBUTVIKLER',
        finnlink: '',
      });

    const handleSubmit = (event  : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormSubmited(true);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <div className="w-full bg-zinc-100 pb-6 grid md:grid-cols-12 pt-[80px]">
            <div className="md:col-span-4">
                <InputBar
                    loading={loading} 
                    formValues={formValues} 
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}/>
            </div>
            <div className="md:col-span-8 min-h-[600px] ">
                <TextEditor
                    formValues={formValues}
                    formSubmited={formSubmited}
                    setLoading={setLoading}
                    loading={loading}
                    setFormSubmited={setFormSubmited}/>
            </div>
        </div>
    )
}

export default EditorPage