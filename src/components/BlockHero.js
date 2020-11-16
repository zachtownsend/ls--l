import Img from 'gatsby-image';
import React from 'react'
import PreHeader from './PreHeader';
import SafeHtml from './SafeHtml';

// TODO: sanitize dangerous html
const BlockHero = ({ settings }) => {
    const { bgcolor, contenthtml, customBgcolor, image, imageposition, pretitle, title, cta } = settings;
    console.log(contenthtml, title);
    return (
        <section className={`bg-${bgcolor} text-white`}>
            <div className="container flex flex-col md:flex-row py-8 md:py-15">
                <div>
                    {pretitle && <PreHeader className="mb-1 md:mb-6" text={pretitle} />}
                    {title && <h1 className="h2 mb-7.25 md:h1">{title}</h1>}
                    <SafeHtml className="prose prose-light">{contenthtml}</SafeHtml>
                    {cta && <a href={cta.url} target={cta.target} className="button button--secondary mt-4 md:mt-10">{cta.title}</a>}
                </div>
                <div>
                    <img src={image.remoteFile.publicURL} />
                </div>
            </div>
        </section>
    )
}

export default BlockHero
