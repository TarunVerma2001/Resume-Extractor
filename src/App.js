// // import { PDFViewer } from "@react-pdf/renderer";
// import { PDFViewer } from "@react-pdf/renderer";
// import { MyDocument } from "./components/Document";

// import { PDFViewer } from "@react-pdf/renderer";

import ReactPDF from "@react-pdf/renderer";

import PdfToJsonConverter from "./components/PdfToJsonConverter";

function App() {
  return (
    <div className="">
      <PdfToJsonConverter />

      {/* <PDFViewer></PDFViewer> */}
    </div>
  );
}

export default App;
