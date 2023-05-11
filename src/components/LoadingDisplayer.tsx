import { ThreeCircles } from "react-loader-spinner";
import React, { useState, useEffect } from 'react';

const LoadingDisplayer : React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300); // Change this value to adjust the delay

        // Cleanup function to clear the timeout if the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
      <>
        <div className='h-full absolute w-full z-40 grid'>
                <ThreeCircles
                    height={100}
                    width={100}
                    color="#4f46e5"                
                    wrapperClass="m-auto "
                    visible={isVisible}
                    ariaLabel="three-circles-rotating" />
            </div>
      </>
    )
}

export default LoadingDisplayer;
