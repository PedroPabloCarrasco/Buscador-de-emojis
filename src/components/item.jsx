import React, { useState, useEffect } from "react";

const Item = ({ title, emoji }) => {
    const [copy, setCopy] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCopy(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [copy]);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText(emoji);
    };

    return (
        <article className="card-emoji">
            <p
                className="emoji-icon"
                onClick={handleCopy}
            >
                {emoji}
            </p>
            <h4>{title}</h4>
            {copy && <p className="copied">Copiado!</p>}
        </article>
    );
};

export default Item;
