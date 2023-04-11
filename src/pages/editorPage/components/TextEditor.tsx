import { Editor } from '@tinymce/tinymce-react';
import React, {useEffect} from 'react';
import {ThreeCircles} from 'react-loader-spinner'
import generateEditorContent from '@/utils/generateEditorContent'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setEditorData } from '@/store/slices/editor/editorDataSlice';


const TextEdtiors : React.FC = ()  =>  {
    const  dispatch = useDispatch();
    const editorIsLoading = useSelector((state: RootState) => state.editorIsLoading.value);
    const fetchedData = useSelector((state: RootState) => state.editorFetchedData.value);
    const editorData = useSelector((state: RootState) => state.editorData.value);

    useEffect(() => {
      // only set editor data if there is a cover letter
      if (fetchedData.applicant_cover_letter != "") { 
          const {content} = generateEditorContent(fetchedData);
          dispatch(setEditorData(content)); 
      }
    }, [fetchedData]);

    return (
        <div className='h-full relative'>
          {editorIsLoading && 
            <div className='h-full absolute w-full z-40 grid'>
              <ThreeCircles
                  height="100"
                  width="100"
                  color="#4f46e5"
                  wrapperStyle={{}}
                  wrapperClass="m-auto "
                  visible={editorIsLoading}
                  ariaLabel="three-circles-rotating"
              />
            </div>
          }
          <div className='p-2 bg-zinc-100 h-full '>
            <Editor
              initialValue={editorData}
              init={{
                menubar: true,
                content_css: "./src/pages/editorPage/components/TextEditor.css",
                height: "100%",
                importcss_append: true,
                plugins: [
                  'importcss advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace visualblocks code',
                  'insertdatetime media table paste wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright | \
                  bullist numlist outdent indent | help'
              }}
            />
          </div>
        </div>
     
      );
}

export default TextEdtiors