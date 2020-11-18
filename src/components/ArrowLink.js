import React from 'react'

const ArrowLink = ({ className, href, target, title }) => {
    const arrow = (
        <svg width="6" height="11"><path d="M.068 9.923L1.044 11 6 5.53.989 0 0 1.09l4.036 4.455z" fill="#000" fillRule="nonzero"/></svg>
    )
    return (
        <a className={className} href={href} target={target}>
            <span className="inline-block">{title}</span>
            <span className="inline-block" style={{marginLeft: 7, height: 10.5}}>{arrow}</span>
        </a>
    )
}

export default ArrowLink
