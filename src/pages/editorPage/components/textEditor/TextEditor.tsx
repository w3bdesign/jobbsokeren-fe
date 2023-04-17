import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import React,  {useEffect, ReactElement, useRef, useState} from 'react';
import {ThreeCircles} from 'react-loader-spinner'
import generateEditorContent from '@/utils/generateEditorContent'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setEditorData } from '@/store/slices/editor/editorDataSlice';
import useApi from '@/hooks/useApi';
import {browserDownloadFile} from '@/utils/browserDownloadFile';


const TextEditor: React.FC = (): ReactElement => {
   
    const exportEditorContentAPI = useApi('generate-export-file','post','arraybuffer');
    const ApiKey = import.meta.env.VITE_TINY_API_KEY;
    const editor = useRef<TinyMCEEditor | null>(null);
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

    const exportFunction = async (type: string) => {
        if (editor.current) {
       
          const editorInstance = editor.current.editor;
          const content = editorInstance?.getContent();
          const data = {
            htmlData: content,
            type: type
          }
          if (content) {
            try {
              const response = await exportEditorContentAPI(data);
            
              if (response.status === 200) {
                    browserDownloadFile({response, type});                  
              } else {
                 console.log(response);
              }
          } catch (error) {
         
            console.log(error);
          }
        }
        } 
    };

    const onPdfExport = () => {
      exportFunction("pdf");
    }

    const onWordExport = () => {
      exportFunction("docx");
    }

    return (
        <div className='h-full relative'>
          {editorIsLoading && 
            <div className='h-full absolute w-full z-40 grid'>
              <ThreeCircles
                 height={100}
                 width={100}
                  color="#4f46e5"                
                  wrapperClass="m-auto "
                  visible={editorIsLoading}
                  ariaLabel="three-circles-rotating"
              />
            </div>
          }
          
          <div className='p-2 bg-zinc-100 h-full'>
            <TinyMCEEditor 
              ref={editor}         
              initialValue={editorData}
              apiKey={ApiKey}
              init={{
                menubar: true,
                content_css: "document",
                height: "100%",
                setup: function (editor) {
                  editor.ui.registry.addButton("exportPDF", {
                    icon: "export",
                    text: "PDF",
                    tooltip: "Export to PDF",
                    onAction: onPdfExport
                  });
                  editor.ui.registry.addButton("exportWord", {
                    icon: "export",
                    text: "Word",
                    tooltip: "Export to Word",
                    onAction: onWordExport
                  });
                },
                plugins: [
                  'importcss', 'advlist', 'autolink', 'lists', 'link', 'image',
                  'charmap', 'preview', 'anchor', 'help',
                  'searchreplace', 'visualblocks', 'code',
                  'insertdatetime', 'media', 'table', 'wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright | \
                  bullist numlist outdent indent | help |  exportPDF exportWord',
              }}
            />
          </div>
        </div>
     
      );
}

export default TextEditor;