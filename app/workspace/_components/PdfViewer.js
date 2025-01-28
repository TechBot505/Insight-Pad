import React from 'react'

function PdfViewer({ fileUrl }) {
    return (
        <div>
            <iframe src={fileUrl+"#toolbar=0"} width="100%" height="85vh" className='h-[85vh]'/>
        </div>
    )
}

export default PdfViewer;