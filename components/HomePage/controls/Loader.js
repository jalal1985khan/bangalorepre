import React from 'react';
import Image from 'next/image'

const Loader = ({isLoading}) => {
  if(!isLoading) return null;
  return (
    <div id="loader" className="d-flex justify-content-center align-items-center flex-column">
      <Image src="/images/pdf.png" alt="loader" className="mb-5 App-logo" width={50} height={50} />
      <p>Loading...</p>
    </div>
  )
}

export default Loader
