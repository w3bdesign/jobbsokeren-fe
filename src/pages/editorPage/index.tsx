import InputBar from "./components/InputBar"
import TextEditor from "./components/TextEditor"


const EditorPage = () => {
    return (
        <div className="w-full bg-zinc-100 pb-6 grid md:grid-cols-12 pt-[80px]">
            <div className="md:col-span-4">
                <InputBar />
            </div>
            <div className="md:col-span-8 min-h-[600px] ">
                <TextEditor />
            </div>
        </div>
    )
}

export default EditorPage


