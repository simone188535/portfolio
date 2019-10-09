import React, { Component } from 'react';
import Pdf from '../documents/Resume.pdf';

class PDFDisplayButtonComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="pdf-button">
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              <div className="resume-button">Preview Resume</div>
            </a>
          </div>
        </div>
      </div>
    );
  }

}

export default PDFDisplayButtonComponent;