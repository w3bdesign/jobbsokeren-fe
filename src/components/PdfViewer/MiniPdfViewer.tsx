import { Transition } from '@headlessui/react';
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '@/assets/styles/miniPdfViwer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();


interface MiniPdfViewerProps {
    url: string;
}


const MiniPdfViewer: React.FC<MiniPdfViewerProps> = ({url}) => {

    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
        setNumPages(nextNumPages);
    }

    function goToPrevPage() {
        setPageNumber(pageNumber - 1);
    }

    function goToNextPage() {
        setPageNumber(pageNumber + 1);
    }

    return (
        <div className="rounded-xl shadow-xl h-[635px] sm:w-[460px]">
            <div className="p-2 flex justify-center">
            <div className="hidden sm:block relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <Document file={url} onLoadSuccess={onDocumentLoadSuccess} >
                    <Page pageNumber={pageNumber} />
                </Document>
                <div className='absolute bottom-5 w-full z-50'>
                <Transition
                    show={isHovering}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                        <div className='flex justify-center cursor-pointer'>
                            <nav aria-label="pdf-nav" className="border border-gray-300 rounded-full bg-white shadow-xl">
                                <ul className="inline-flex items-center">
                                    <li className='p-1'>
                                        <button  disabled={pageNumber <= 1} onClick={goToPrevPage} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border-none hover:bg-gray-100 hover:text-gray-700 ">
                                            <ArrowSmallLeftIcon className={`w-5 h-5 ${pageNumber <= 1 ? 'text-gray-300' : 'text-gray-500'}`} />
                                        </button>
                                    </li> 
                                    <li className='p-1'>
                                        <a className="px-3 py-2 h-5 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700">{`${pageNumber} av ${numPages}`}</a>
                                    </li>
                                    <li className='p-1'>
                                        <button disabled={pageNumber >= numPages} onClick={goToNextPage} className="block px-3 py-2 leading-tight text-gray-500 bg-white border-none hover:bg-gray-100 hover:text-gray-700">
                                            <ArrowSmallRightIcon className={`w-5 h-5 ${pageNumber >= numPages ? 'text-gray-300' : 'text-gray-500'}`} />
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Transition>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MiniPdfViewer
