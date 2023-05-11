import { ThreeCircles } from "react-loader-spinner";
import React from 'react';


const LoadingDisplayer : React.FC = () => {
    return (
      <>
        <div className='h-full absolute w-full z-40 grid'>
                <ThreeCircles
                    height={100}
                    width={100}
                    color="#4f46e5"                
                    wrapperClass="m-auto "
                    visible={true}
                    ariaLabel="three-circles-rotating" />
            </div>
      </>
    )
  }

export default LoadingDisplayer

  