import React from 'react';
import SanitizeHTML from 'sanitize-html';
const SafeHtml = ({ className = "", children }) => {
    const unsafe = React.Children.toArray(children)
        .filter(child => typeof child === 'string')
        .join('');

    let escaped = SanitizeHTML(unsafe, {
        'allowedTags': [
            "blockquote",
            "p",
            "a",
            "ul",
            "ol",
            "li",
            "b",
            "i",
            "strong",
            "em",
            "strike",
            "del",
            "br",
            "div",
            "sup",
            "sub",
        ],
        allowedAttributes: {
            a: ["href", "name", "target"],
            img: ["src"],
        },
        selfClosing: [
            "img",
            "br",
            "hr",
            "area",
            "base",
            "basefont",
            "input",
            "link",
            "meta",
        ],
        // URL schemes we permit
        allowedSchemes: ["http", "https", "ftp", "mailto"],
        allowedSchemesByTag: {},
    });
    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{
                __html: escaped,
            }}
        />
    )
}

export default SafeHtml
