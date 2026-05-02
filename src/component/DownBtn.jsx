import React from 'react';

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
    <button className="mt-8 bg-[#007bff] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,123,255,0.5)]" onClick={() => { downloedFileAtUrl(PNG_FILE_URL) }}>
      Download CV
    </button>
  );
};

export default DownBtn;
