import React from 'react'
import ArrowLink from './ArrowLink';
import BlockTitle from './BlockTitle';
import Card from './Card';

const BlockCards = ({ settings }) => {
    const { bgcolor, blocktitleenabled, blocktitle, cards, customBgcolor } = settings;
    console.log({ cards });
    return (
        <div className={`bg-${bgcolor} pb-20 pt-10.5 lg:pt-15`} style={bgcolor === 'custom' ? {background: customBgcolor} : null}>
            {blocktitleenabled && <BlockTitle pretitle={blocktitle.pretitle} title={blocktitle.title} posttitle={blocktitle.posttitle} />}
            <div className="container">
                <ul className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                    {cards.map((card, i) =>
                        <li key={card.cardtitle} className="flex justify-center">
                            <Card
                                image={<img src={card.image.localFile.publicURL} alt={card.image.altText} />}
                                title={card.cardtitle}
                                content={card.cardcontent}
                                footer={<ArrowLink className="font-bold" href={card.link.url} target={card.link.target} title={card.link.title || 'Learn More'} />}
                            />
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default BlockCards
