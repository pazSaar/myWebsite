import TheQueuePDF from "../assets/TheQueue.pdf";
import PdfViewer from "../components/PDFViewer";
import { useEffect } from "react";
import Elevator from "../components/Elevator/Elevator";
import FlickrGallery from "../components/FlickrGallery/FlickrGallery";

export default function Philosopher() {
  return (
    <div className="flex flex-col justify-center align-middle p-6">
      <h1 className="self-center my-2 underline decoration-dashed">
        Here are some philosophical writing I wrote over the years.
      </h1>
      <ul className="flex flex-col justify-start p-12 gap-8 list-disc">
        <li>
          <span>
            The Queue, An analytical investigation of what is queue.{" "}
            <a
              className="underline"
              href="https://drive.google.com/file/d/15dhrvrwUbYDojJIP3mk60FuH0A_CEd_9/view?usp=sharing"
              target="_blank"
            >
              Link to PDF
            </a>
          </span>
        </li>
        <li>
          <span>
            Vagueness and Meaning: Theories of Vagueness and their approach to
            the foundation of meaning in natural language. (My thesis. In
            Hebrew){" "}
            <a
              className="underline"
              href="https://drive.google.com/file/d/1_kNHpitbQHrpPm7W1EY1_7AadkRyX79Y/view?usp=sharing"
              target="_blank"
            >
              Link to PDF
            </a>
          </span>
        </li>
        <li>
          <span>
            My philosophical facebook page - The Public Philosopher (writing in
            Hebrew){" "}
            <a
              className="underline"
              href="https://www.facebook.com/thepublicphilosopher"
              target="_blank"
            >
              Link to page
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}
