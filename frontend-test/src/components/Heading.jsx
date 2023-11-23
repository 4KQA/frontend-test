import React from 'react'

export default function Heading({heading}) {
  return (
    <div style={{
        display:"flex",
        justifyContent: "center",
        width: "100%",
    }}>
        <div style={{
            width: "80%",
        }}>
        <h1 style={{
            width: "100%",
            margin: "40px 0px 0px 0px",
        }}>
        {heading}
        </h1>
        </div>
    </div>
  )
}
