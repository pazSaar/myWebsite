import TheQueuePDF from "../assets/TheQueue.pdf";
import PdfViewer from "../components/PDFViewer";
import { useEffect } from "react";

export default function Philosopher() {
  let pdfURL: any;

  useEffect(() => {
    pdfURL = TheQueuePDF;
  }, []);

  return (
    <div>
      <h1>This is the Philosophy page.</h1>
      <PdfViewer PDFDoc={TheQueuePDF!} />
    </div>
  );
}
