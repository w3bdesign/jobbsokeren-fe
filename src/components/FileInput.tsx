import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface FileInputProps {
    name?: string | undefined | null;
    image?: string | undefined | null;
    onFileUpload: (file: File) => void;
    setFile: (file: File) => void;
    file: File | null;
}

const FileInput: React.FC<FileInputProps> = ({file, setFile, onFileUpload}) => {
    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        if (event.dataTransfer.items) {
            const fileItem = event.dataTransfer.items[0];
            if (fileItem.kind === 'file') {
                const droppedFile = fileItem.getAsFile();
                if (droppedFile && droppedFile.type === 'application/pdf') {
                    setFile(droppedFile);
                } else {
                    alert('Beklager! Vi støtter for øyeblikket bare PDF-filer.');
                }
            }
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0].type === 'application/pdf') {
            setFile(event.target.files[0]);
            setFile && setFile(event.target.files[0]);
        } else {
            alert('Please upload a PDF file.');
        }
    };
    

    return (
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" 
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {file ? (
                   <div className="flex items-center space-x-2">
                        <DocumentTextIcon className="w-6 h-6 text-gray-500" />
                   <p className="text-sm text-gray-500">Fil: {file.name}</p>
               </div>
                ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Klikk for å laste opp CV</span> Eller dra inn filen</p>
                        <p className="text-xs text-gray-500">PDF</p>
                    </div>
                )}
                <input id="dropzone-file" type="file" className="hidden" onChange={event => {
                    if (event.target.files && event.target.files[0].type === 'application/pdf') {
                        setFile(event.target.files[0]);
                    } else {
                        alert('Please upload a PDF file.');
                    }
                }} />
            </label>
        </div>
    )
}

export default FileInput;
