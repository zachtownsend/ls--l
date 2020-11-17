import React from 'react'
import PreHeader from './PreHeader'
import SafeHtml from './SafeHtml';

const BlockTitle = ({ title, pretitle, posttitle, className }) => {
    return (
        <div className={`${className} mb-10`}>
            <div className="container text-center" style={{ maxWidth: 570 }}>
                {pretitle && <PreHeader className="mb-4.75 md:mb-6.5" text={pretitle} />}
                {title && <h2 class="h3 mb-7.5 md:h2 md:mb-6.5">{title}</h2>}
                {posttitle && <SafeHtml>{posttitle}</SafeHtml>}
            </div>
        </div>
    )
}

export default BlockTitle
