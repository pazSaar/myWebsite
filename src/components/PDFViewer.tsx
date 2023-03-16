import React, { FC, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import type { DocumentProps } from "react-pdf";
import classNames from "classnames";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  PDFDoc: string;
}

const PdfViewer: FC<Props> = React.memo(({ PDFDoc }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () => {
    if (numPages !== null) {
      setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
    }
  };

  return (
    <div>
      <nav>
        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </nav>

      <Document file={PDFDoc} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
});

export default PdfViewer;
