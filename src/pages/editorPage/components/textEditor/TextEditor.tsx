import { Editor } from '@tinymce/tinymce-react';
import React,  {useEffect, ReactElement} from 'react';
import {ThreeCircles} from 'react-loader-spinner'
import generateEditorContent from '@/utils/generateEditorContent'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setEditorData } from '@/store/slices/editor/editorDataSlice';


const TextEditor: React.FC = (): ReactElement => {
    const ApiKey = import.meta.env.VITE_TINY_API_KEY;
    const  dispatch = useDispatch();
    const { editorIsLoading, editorFetchedData, editorData } = useSelector((state: RootState) => ({
      editorIsLoading: state.editorIsLoading.value,
      editorFetchedData: state.editorFetchedData.value,
      editorData: state.editorData.value,
    }));

    useEffect(() => {
      if (editorFetchedData?.applicant_cover_letter != "") {
        const { content } = generateEditorContent(editorFetchedData);
        dispatch(setEditorData(content));
      }
    }, [editorFetchedData]);

    return (
        <div className='h-full relative'>
          {editorIsLoading && 
            <div className='h-full absolute w-full z-40 grid'>
              <ThreeCircles
                 height={100}
                 width={100}
                  color="#4f46e5"
                  wrapperStyle={{}}
                  wrapperClass="m-auto "
                  visible={editorIsLoading}
                  ariaLabel="three-circles-rotating"
              />
            </div>
          }
          
          <div className='p-2 bg-zinc-100 h-full'>
            <Editor          
              initialValue={editorData}
              apiKey={ApiKey}
              init={{
                menubar: true,
                content_css: "document",
                height: "100%",
                plugins: [
                  'importcss', 'advlist', 'autolink', 'lists', 'link', 'image',
                  'charmap', 'preview', 'anchor', 'help',
                  'searchreplace', 'visualblocks', 'code',
                  'insertdatetime', 'media', 'table', 'wordcount'
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

export default TextEditor;