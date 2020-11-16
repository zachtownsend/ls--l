import React from 'react'

const PreHeader = ({ text, className }) => {
    return (
        <p className={`uppercase tracking-wide ${className}`}>
            {text}
        </p>
    )
}

export default PreHeader
