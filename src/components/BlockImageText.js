import React from 'react'
import Img from 'gatsby-image';
import SafeHtml from './SafeHtml';

const BlockImageText = ({ settings }) => {
    const { imageposition, image, contenthtml, options } = settings;
    const { bgcolor, custombgcolor } = options;
    console.log({ settings });
    // PurgeCss: bg-primary bg-secondary bg-teriary

    const blockImage = (
        <div className="flex-1 flex items-center">
            <div className="w-full">
                <Img fluid={image.localFile.childImageSharp.fluid} />
            </div>
        </div>
    );

    const blockContent = (
        <div className="flex-1">
            <div>
                <SafeHtml>{contenthtml}</SafeHtml>
            </div>
        </div>
    );
    return (
        <section className={`bg-${bgcolor} pb-20 pt-10.5 lg:pt-13.75`} style={bgcolor === 'custom' ? {background: custombgcolor} : null}>
            <div className="container flex flex-col md:flex-row py-8 md:py-15">
                {imageposition === 'imageLeft' ? blockImage : blockContent }
                {imageposition === 'imageLeft' ? blockContent : blockImage }
            </div>
        </section>
    )
}

export default BlockImageText
