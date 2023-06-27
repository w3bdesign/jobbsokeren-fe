import InputBar from './components/inputBar/InputBar'
import EditorNewsLetterModal from './components/newsLetterModal/EditorNewsletterModal'
import TextEditor from './components/textEditor/TextEditor'


const EditorPage = () => {
    return (
        <>
            <div className="w-full bg-zinc-100 pb-6 grid md:grid-cols-12 pt-[80px]">
                <div className="md:col-span-4 3xl:m-auto">
                    <InputBar />
                </div>
                <div className="md:col-span-8 min-h-[600px] ">
                    <TextEditor />
                </div>
                <EditorNewsLetterModal />
            </div>
        </>
    )
}

export default EditorPage


