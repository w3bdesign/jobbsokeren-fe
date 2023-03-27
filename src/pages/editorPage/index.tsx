import InputBar from "./components/InputBar"
import TextEdtior from "./components/TextEditor"
import { useState } from "react"
import { EditorFormModel} from "@/models/editorFormModel"

const EditorPage = () => {

    const [formSubmited, setFormSubmited] = useState<boolean>(false);
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
        <div className="w-full grid md:grid-cols-12 h-screen pt-[80px]">
            <div className="md:col-span-4">
                <InputBar 
                    formValues={formValues} 
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}                 
                    />
            </div>
           <div className="md:col-span-8">
            <TextEdtior
                    formValues={formValues}
                    formSubmited={formSubmited}
                />
           </div>
        </div>
    )
}

export default EditorPage