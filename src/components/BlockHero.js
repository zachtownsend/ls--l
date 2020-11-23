import Img from 'gatsby-image';
import React from 'react';
import PreHeader from './PreHeader';
import SafeHtml from './SafeHtml';

// TODO: sanitize dangerous html
const BlockHero = ({ settings }) => {
  const {
    bgcolor, contenthtml, customBgcolor, image, imageposition, pretitle, title, cta,
  } = settings;
  console.log({ contenthtml, title, imageposition });
  // PurgeCss: bg-primary bg-secondary bg-teriary
  return (
    <section className={`bg-${bgcolor} text-white`} style={bgcolor === 'custom' ? { background: customBgcolor } : null}>
      <div className="container flex flex-col md:flex-row py-8 md:py-15">
        <div className="flex-1">
          <div>
            {pretitle && <PreHeader className="mb-1 md:mb-6" text={pretitle} />}
            {title && <h1 className="h2 mb-7.25 md:h1">{title}</h1>}
            <SafeHtml className="prose prose-light">{contenthtml}</SafeHtml>
            {cta && <a href={cta.url} target={cta.target} className="button button--secondary mt-4 md:mt-10">{cta.title}</a>}
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <Img fluid={image.localFile.childImageSharp.fluid} fadeIn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockHero;
