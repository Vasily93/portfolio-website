import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { Box } from '@mui/material';

function PdfLoader() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdf = '/vm.pdf';

    useEffect(() => {
        if(document.getElementsByClassName('react-pdf__Page__canvas')[0]) {
            const canvas = document.getElementsByClassName('react-pdf__Page__canvas')[0];
            canvas.setAttribute('style' ,  'user-select: none; width: 594px; height: 840px;')
        }
    })

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box sx={{ backgroundColor:'lightgrey', py: 2 }}>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page  pageNumber={pageNumber}  style={{display: 'none' }}/>
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </Box>
  );
}

export default PdfLoader;