import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
 
function useFetchContent (id) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
   
    return {
      user: data,
      isLoading,
      isError: error
    }
  }