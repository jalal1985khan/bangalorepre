import React from 'react';
//import PDFPrinter from './PDFPrinter';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft ,FaFileDownload, FaAngleRight ,FaSearchPlus,FaSearchMinus } from 'react-icons/fa';


const ControlPanel = (props) => {
  const { file, pageNumber, numPages, setPageNumber, scale, setScale } = props;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
  const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 4.0;

  const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
  const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <div className="control-panel flex-xs-wrap mt-3 pt-3 pb-3 d-flex align-items-baseline justify-content-between">
      <div className="d-flex m-display justify-content-between align-items-baseline">
        <FaAngleDoubleLeft onClick={goToFirstPage} className={`fas fa-fast-backward mx-3 ${firstPageClass}`}/>
   
        <FaAngleLeft className={`fas fa-backward mx-3 ${firstPageClass}`}
          onClick={goToPreviousPage}/>
        <span>
          Page{' '}
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            className="pt-0 pl-1 mx-2"
            value={pageNumber}
            onChange={onPageChange}
          />{' '}
          of {numPages}
              </span>
    <FaAngleRight className={`fas fa-forward mx-3 ${lastPageClass}`}
          onClick={goToNextPage}/>
   <FaAngleDoubleRight className={`fas fa-fast-forward mx-3 ${lastPageClass}`}
          onClick={goToLastPage}/>  
      </div>
      <div className="d-flex m-display mt-3 justify-content-between align-items-baseline">
        <FaSearchMinus
          className={`mx-3 ${zoomOutClass}`}
          onClick={zoomOut}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <FaSearchPlus
          className={`mx-3 ${zoomInClass}`}
          onClick={zoomIn}
        />
      </div>
      <div className="mx-3 mt-3 m-display">
        <a href="/pdf/TOR_Multi-city-Initiative.pdf" download={true} title="download" className="btn btn-primary">
          <FaFileDownload className="fas fa-file-download clickable" />
        </a>
      </div>
    </div>
  );
};

export default ControlPanel;
