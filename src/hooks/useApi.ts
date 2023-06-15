import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiOptions extends AxiosRequestConfig {
  data?: any;
}

const APiUrl = import.meta.env.VITE_MAIN_BACKEND_API_URL;
const API_KEY = import.meta.env.VITE_MAIN_BACKEND_API_KEY; 

const useApi = (
  endPointUrl: string,
  method: "get" | "post" | "put" | "delete",
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream",
  options: ApiOptions = {},
) => {
  const apiCall = async (data?: any): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
      url: APiUrl + endPointUrl,
      method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY, 
      },
      responseType, // Add responseType to the config object
      ...options,
    };

    if (data) {
      config.data = data;
    }

    return axios(config);
  };

  return apiCall;
};

export default useApi;
