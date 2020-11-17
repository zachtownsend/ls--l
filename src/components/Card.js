import React from 'react'
import SafeHtml from './SafeHtml'

const Card = ({ image, title, content, footer}) => {
    return (
        <div className="flex flex-col shadow-sm bg-white rounded px-7.5" style={{ maxWidth: 444 }}>
            <div className="w-full h-54 flex justify-center align-center">
                {image}
            </div>
            <div className="prose">
                <h4>{title}</h4>
                <SafeHtml>{content}</SafeHtml>
            </div>

            {footer && (
                <div className="border-t border-black py-4.5">
                    {footer}
                </div>
            )}

        </div>
    )
}

export default Card
