import React from 'react'
import BlockHero from './BlockHero';
import BlockCards from './BlockCards'

const PageComponents = ({ data }) => {

    const content = data.map(component => {
        switch (component.fieldGroupName) {
            case 'page_Pagecomponents_Pagecomponents_Blockhero':
                return <BlockHero />;

            case 'page_Pagecomponents_Pagecomponents_Blockcards':
                return <BlockCards />;
        }
    });

    return (
        <div>
            {content}
        </div>
    )
}

export default PageComponents
