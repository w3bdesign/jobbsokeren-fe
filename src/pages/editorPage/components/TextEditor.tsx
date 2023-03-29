import { Editor } from '@tinymce/tinymce-react';
import React, {useState, useEffect} from 'react';
import { EditorFormPropsModel } from '@/models/editorFormModel';
import {ThreeCircles} from 'react-loader-spinner'
import useContent from '../hooks/useContent';


const TextEdtiors : React.FC<EditorFormPropsModel> = ({formValues, formSubmited, setFormSubmited, setLoading, loading} )  =>  {

    const [initialValue, setInitialValue] = useState("<h1>Fyll ut skjemaet til venstre for å generere søknaden</h1>");
    const {content} = useContent(formValues);
    
   
      useEffect(() => {
        if (formSubmited) {
          // wrap in setTimeout to simulate async call
          setInitialValue("");
          setLoading(true);
          setTimeout(() => {
            setInitialValue(content);
            setLoading(false);
            setFormSubmited(false);
          }, 2500);
        }
      }, [formSubmited]);

    return (
        <div className='h-full relative'>
          {loading && 
            <div className='h-full absolute w-full z-40 grid'>
              <ThreeCircles
                  height="100"
                  width="100"
                  color="#4f46e5"
                  wrapperStyle={{}}
                  wrapperClass="m-auto "
                  visible={loading}
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