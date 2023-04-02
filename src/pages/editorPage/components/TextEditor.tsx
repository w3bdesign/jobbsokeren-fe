import { Editor } from '@tinymce/tinymce-react';
import React, {useState, useEffect} from 'react';
import { EditorFormPropsModel } from '@/models/editorFormModel';
import {ThreeCircles} from 'react-loader-spinner'
import generateEditorContent from '@/utils/generateEditorContent'


const TextEdtiors : React.FC<EditorFormPropsModel> = ({initialValue, setInitialValue, fetchedData, formSubmited, setFormSubmited, isLoading} )  =>  {


 
    const {content} = generateEditorContent(fetchedData);
 
      useEffect(() => {
        if (formSubmited) {
            setInitialValue(content);
            setFormSubmited(false);
        }
      }, [formSubmited]);

    return (
        <div className='h-full relative'>
          {isLoading && 
            <div className='h-full absolute w-full z-40 grid'>
              <ThreeCircles
                  height="100"
                  width="100"
                  color="#4f46e5"
                  wrapperStyle={{}}
                  wrapperClass="m-auto "
                  visible={isLoading}
                  ariaLabel="three-circles-rotating"
                
              />
            </div>
          }
          <div className='p-2 bg-zinc-100 h-full '>
            <Editor
              initialValue={initialValue}
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