import { EditorFormModel } from "./editorFormModel";

export interface EditorFormPropsModel {
    formValues: EditorFormModel;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (React.FormEventHandler<HTMLFormElement>) | undefined;
   
  }
  