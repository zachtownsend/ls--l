import React from 'react'
import PreHeader from './PreHeader'
import SafeHtml from './SafeHtml';
import styled from 'styled-components';

const Title = ({ title, pretitle, content, className }) => {
    return (
        <div className={className}>
            <div className="container text-center" style={{ maxWidth: 570 }}>
                {pretitle && <PreHeader className="mb-4.75 md:mb-6.5" text={pretitle} />}
                {title && <h2 className="h3 mb-7.5 md:h2 md:mb-6.5">{title}</h2>}
                {content && <SafeHtml>{content}</SafeHtml>}
            </div>
        </div>
    )
}

const BlockTitle = ({ settings }) => {
    const { pretitle, title, contenthtml } = settings;
    const { theme, bgcolor, custombgcolor, blockPaddingBottom, blockPaddingMd } = settings.options;
    // PurgeCss: bg-primary bg-secondary bg-teriary

    const BlockSection = styled.section`
        padding-bottom: ${blockPaddingBottom}px;

        @media and screen (min-width: 768px) {
            padding-bottom: ${blockPaddingMd}px;
        }
    `;

    const themeClass = theme === 'themeLight' ? 'text-white' : null;

    return (
        <BlockSection className={`bg-${bgcolor} ${themeClass} pt-10.5`} style={bgcolor === 'custom' ? {background: custombgcolor} : null}>
            <Title pretitle={pretitle} title={title} content={contenthtml} />
        </BlockSection>
    )
};

export default BlockTitle
