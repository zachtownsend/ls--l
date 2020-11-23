import React from 'react';
import BlockHero from './BlockHero';
import BlockCards from './BlockCards';
import BlockTitle from './BlockTitle';
import BlockImageText from './BlockImageText';

const PageComponents = ({ data }) => {
  if (!Array.isArray(data)) {
    return null;
  }

  const content = data.map((component, index) => {
    switch (component.fieldGroupName) {
      case 'page_Pagecomponents_Pagecomponents_Blockhero':
        return <BlockHero key={index} settings={component} />;

      case 'page_Pagecomponents_Pagecomponents_Blockcards':
        return <BlockCards key={index} settings={component} />;

      case 'page_Pagecomponents_Pagecomponents_Blocktitle':
        return <BlockTitle key={index} settings={component} />;

      case 'page_Pagecomponents_Pagecomponents_Blockimagetext':
        return <BlockImageText key={index} settings={component} />;

      default:
        return null;
    }
  });

  return (
    <div>
      {content}
    </div>
  );
};

export default PageComponents;
