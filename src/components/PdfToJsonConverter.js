// import { View } from "@react-pdf/renderer";

import React, { useState } from "react";

import { pdfjs } from "react-pdf";

const PdfToJsonConverter = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [jsonResume, setJsonResume] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  console.log(jsonResume);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const dataBuffer = await file.arrayBuffer();
      const data = new Uint8Array(dataBuffer);

      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

      const pdf = await pdfjs.getDocument(data).promise;
      const numPages = pdf.numPages;
      let textContent = "";

      for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const pageText = await page.getTextContent();

        console.log(pageText);
        textContent += pageText.items.map((item) => item.str).join(" ");
      }

      const jsonResumeData = {
        textContent, // You might want to parse this text content into structured JSON based on your resume format.
      };

      setJsonResume(jsonResumeData);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {jsonResume && (
        <div>
          <h2>JSON Resume:</h2>
          <pre>{JSON.stringify(jsonResume)}</pre>
        </div>
      )}
    </div>
  );
};

export default PdfToJsonConverter;
