import { EditorFormModel } from "./editorFormModel";

export interface EditorFormPropsModel {
    formValues: EditorFormModel;
    isLoading: boolean;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (React.FormEventHandler<HTMLFormElement>) | undefined;
  }
  