import InputBar from "./components/InputBar"
import TextEdtior from "./components/TextEditor"


const EditorPage = () => {
    return (
        <div className="w-full grid md:grid-cols-12 h-screen pt-[80px]">
            <div className="md:col-span-4">
                <InputBar/>
            </div>
           <div className="md:col-span-8">
                <TextEdtior/>
           </div>
        </div>
    )
}

export default EditorPage