import React, { FormEvent, useEffect, useRef, useState } from 'react';
import useApi from "@/hooks/useApi";
import { AxiosError } from 'axios';
import { useApiInterface } from "@/models/useApiModel";
import SuccessToast from "./SuccessToast";
import NewsLetterBannerForm from "./NewsLetterBannerForm";

const NewsLetterBanner : React.FC = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    
    // Storing in local store to respect user preference
    const [newsLetterIsVisible, setNewsLetterIsVisible] = useState<boolean>(() => {
      const saved = localStorage.getItem("isVisible");
      const initialValue = saved ? JSON.parse(saved) : false;
      return initialValue;
    });
  
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [apiStatus, setApiStatus] = useState<string>('');
  
    useEffect(() => {
      const checkScroll = () => {
         // Get the stored value
         const storedValue = localStorage.getItem("newsLetterIsVisible");
        // If the user has scrolled, set isVisible to true
        if (window.scrollY > 500 && (!storedValue || JSON.parse(storedValue) !== false)) {
          setNewsLetterIsVisible(true);
        }
      };
  
      // Add the event listener when the component mounts
      window.addEventListener('scroll', checkScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', checkScroll);
      };
    }, []);
  
    const handleClose = () => {
      setNewsLetterIsVisible(false);
      localStorage.setItem("newsLetterIsVisible", JSON.stringify(false));
    }
  
    
   
    const onSubmit  = async (e: FormEvent)  =>  {
        e.preventDefault();
        const email_address = emailRef.current?.value;
        const status = "subscribed";
        const exportEditorContentAPI = useApi('/subscribe-to-mailchimp','post');
        try {
          const response = await exportEditorContentAPI({email_address, status});
          if (response.data.statusCode === 200) {
            handleClose();
            setSubmitted(true);
        
            // Set 'submitted' back to false after 2 seconds
            setTimeout(() => {
              setSubmitted(false);
            }, 6000);
          }  else if (response.data.statusCode === 400) {
            setApiStatus('Denne e-postadressen er allerede registrert.');
          }
        } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const data = axiosError.response.data as useApiInterface;
            if (data.statusCode === 422) {
              setApiStatus('Vennligst skriv inn en gyldig e-postadresse.');
            } else {
              setApiStatus('Noe gikk galt. Prøv igjen senere.');
            }
          }
        }
    };
  
  
    return (
      <>
        <div className="flex flex-col items-center">
          <NewsLetterBannerForm 
            newsLetterIsVisible={newsLetterIsVisible} 
            onSubmit={onSubmit} 
            emailRef={emailRef} 
            apiStatus={apiStatus} 
            handleClose={handleClose} />   
          <SuccessToast 
            display={submitted} 
            text="Takk for at du meldte deg på nyhetsbrevet!" />
          </div>
      </>
    )
  }

export default NewsLetterBanner;