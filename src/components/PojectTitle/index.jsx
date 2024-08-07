import React from 'react'
import './PojectTitle.css'
const PojectTitle = ({title}) => {
  return (
    <div
        className='flex flex-row items-center mb-[64px]'
      >
        <div
          style={{
            display: "flex",
            background: "#13829B",
            width: "17px",
            height: "2px",
          }}
        />
        <p
          className='projectTitle'
        >
          {title}
        </p>
      </div>
  )
}

export default PojectTitle