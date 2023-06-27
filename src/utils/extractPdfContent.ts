import { getDocument, PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';

const readFileAsArrayBuffer = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = (error) => reject(new Error(`Failed to read file: ${error}`));
    reader.readAsArrayBuffer(file);
  });
};

export const parsePdf = async (file: File): Promise<string> => {
  try {
    const arrayBuffer = await readFileAsArrayBuffer(file);
    const pdf: PDFDocumentProxy = await getDocument(arrayBuffer).promise;
    let text = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page: PDFPageProxy = await pdf.getPage(i);
      const content = await page.getTextContent();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      text += content.items.map((item: any) => item.str).join(' ');
    }
    
    return text;
  } catch (error) {
    throw new Error(`Failed to parse PDF: ${error}`);
  }
};
