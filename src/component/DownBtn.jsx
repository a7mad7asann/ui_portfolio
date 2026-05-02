import React from 'react';

//style
import '../style/DownBtn.css';

import file_pdf_1 from '../pdf/Hossam Eldeen mohamed cv UI&UX DESIGNER.pdf';

// Assuming the file is placed in the public directory
const PNG_FILE_URL = file_pdf_1

const DownBtn = () => {
  const downloedFileAtUrl = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
}

  return (
    <button className='down' onClick={() => { downloedFileAtUrl(PNG_FILE_URL) }}>
      Download CV
    </button>
  );
};

export default DownBtn;
