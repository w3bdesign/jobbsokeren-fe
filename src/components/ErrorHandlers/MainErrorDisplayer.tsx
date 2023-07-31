import React from 'react';

interface Props {
  title: string;
  errorMessage: string;
  errorCode: number;
  resetErrorBoundary: () => void;  // Function to reset the error boundary
}

const MainErrorDisplayer: React.FC<Props> = ({title, errorMessage, errorCode, resetErrorBoundary}) => {
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-zinc-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">{errorCode}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">{title}</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">{errorMessage}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="py-3 px-6 w-full my-4" onClick={resetErrorBoundary}>
              Prøv å laste inn siden på nytt
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainErrorDisplayer;
