import React, { Component } from 'react';
import PDF from 'react-pdf-js';

import CVPDF from '../../CV.pdf';

class Cv extends Component{
  constructor(){
    super();
    this.state={
      numPages: null,
      pageNumber: 1
    }
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  render(){
    return(
      <div>
        <PDF
          file={CVPDF}
        />
        <a href={CVPDF}>Download</a>
      </div>
    )
  }
}

export default Cv;
