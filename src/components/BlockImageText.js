import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import tw from 'twin.macro';
import SafeHtml from './SafeHtml';

const BlockImageText = ({ settings }) => {
  const {
    imageposition, image, contenthtml, options,
  } = settings;
  const { bgcolor, custombgcolor } = options;
  console.log({ settings });
  // PurgeCss: bg-primary bg-secondary bg-teriary

  const Container = styled.div`
    max-width: 1000px;
  `;

  const Content = styled.div`
    h4 {
        ${tw`mb-5.75 md:mb-7.75 md:text-4xl`};
    }
  `;

  return (
    <section className={`bg-${bgcolor} pb-20 pt-10.5 lg:pt-13.75`} style={bgcolor === 'custom' ? { background: custombgcolor } : null}>
      <Container className="container flex flex-col md:flex-row py-8 md:py-15 gap-7.5">
        <div className={`flex-1 flex items-center order-1 flex items-center ${imageposition === 'imageRight' ? 'md:order-2' : 'md:order-1'}`}>
          <div className="w-full">
            <Img fluid={image.localFile.childImageSharp.fluid} fadeIn />
          </div>
        </div>
        <div className={`flex-1 order-2 flex items-center ${imageposition === 'imageRight' ? 'md:order-1' : 'md:order-2'}`}>
          <Content>
            <SafeHtml className="prose">{contenthtml}</SafeHtml>
          </Content>
        </div>
      </Container>
    </section>
  );
};

export default BlockImageText;
