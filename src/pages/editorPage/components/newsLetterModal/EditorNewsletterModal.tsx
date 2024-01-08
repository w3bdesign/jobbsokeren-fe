import { useState, useEffect } from 'react'; // new import
import { useSelector } from 'react-redux';

import NewsLetterModal from '@/components/Modals/NewsLetterModal';
import { RootState } from '@/store/store';


const EditorNewsLetterModal : React.FC =  () => {
    const submitCount = useSelector((state: RootState) => state.editorSubmitCount.value);
    const editorIsLoading = useSelector((state: RootState) => state.editorIsLoading.value);
    const [startModal, setStartModal] = useState<boolean>(false);
    
    const handleModal = (startModal: boolean) => {
        setStartModal(startModal)
        if (startModal === false) {
            localStorage.setItem('newsLetterModalIsVisible', JSON.stringify(false));
        }
   }

    useEffect(() => {
        // Ensure storedBannerValue is 'true' (localStorage stores values as strings)
        // and submitCount is over 2 and editorIsLoading is false
        if ( submitCount > 2 && !editorIsLoading && JSON.parse(localStorage.getItem('newsLetterModalIsVisible') || 'true')) {
            setStartModal(true);
        } else {
            setStartModal(false);
        }
    }, [submitCount, editorIsLoading]); // watch these values

    return (
        <NewsLetterModal 
            startModal={startModal} 
            handleModal={handleModal} />
    )
}

export default EditorNewsLetterModal;
