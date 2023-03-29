import useSWR, { Fetcher } from 'swr'
import { fetcher } from '@/utils/fetcher'
import { EditorFormModel } from "@/models/editorFormModel";
 
function useFetchContent ( {name, email, address, city, postalcode, finnlink} : EditorFormModel) {
    const { data, error, isLoading } = useSWR(`http://127.0.0.1:3000/api/jobApplicationData`, fetcher)
   
    return {
      editorData: data,
      isLoading,
      isError: error
    }
  }

export default useFetchContent