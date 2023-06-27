interface BrowserDownloadFileOptions {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response: { data: BlobPart; headers: { [x: string]: any; }; }
    type: string;
}

export const browserDownloadFile = ({response, type } : BrowserDownloadFileOptions) => {
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    // Set the response as a Blob and set the URL
    const blob = new Blob([response.data], {
      type: response.headers['content-type']
    });
    const url = window.URL.createObjectURL(blob);

    // Set the href and download attribute of the anchor element
    link.href = url;
    link.setAttribute('download', type === 'pdf' ? 'søknad.pdf' : 'søknad.docx');

    // Simulate a click event to start the download
    link.click();

    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
}