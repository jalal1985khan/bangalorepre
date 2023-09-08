"use client"
import React, { useState } from 'react';
import Loader from '../HomePage/controls/Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from '../HomePage/controls/ControlPanel';
import { Container } from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(2.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div>
      <Container><h2 className="fs-40 blue fw-bold">Take enviromental surveillance to your city</h2></Container>
      <Loader isLoading={isLoading} />
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file="/pdf/TOR_Multi-city-Initiative.pdf"
        />
        <Document
          file="/pdf/TOR_Multi-city-Initiative.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf"
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
