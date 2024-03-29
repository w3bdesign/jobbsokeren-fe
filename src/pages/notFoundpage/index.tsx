import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

const NotFoundPage : React.FC = () => {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-zinc-100 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">Finner ikke siden</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Beklager vi finner ikke siden du leter etter.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <RouterLink to="/">
                <button className="py-3 px-6 w-full my-4">
                Tilbake til forsiden
                </button>
              </RouterLink>
            </div>
          </div>
        </main>
      </>
    )
  }

export default NotFoundPage

  