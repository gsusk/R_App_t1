import React from "react";


export default function Quotes({apiData, apiNewRequest}) {
    return (
        <>
        <div id="quote-wrap">
            <h1 id="text">{apiData.quote}</h1>
            <p id="author">{apiData.author}</p>
        </div>
        <button id="new-quote" onClick={apiNewRequest}>New Quote</button>
        </>
    )
}



function Socials() {
    return (
        <div id="socials">
            <button><a id='tweet-quote'>socials ph</a></button>
            <button><a id='tmblr-quote'>socials ph</a></button>
        </div>
    )
}


function Credits() {
    return (
        <p id='credits'>made by <a>ph</a></p>
    )
}


export {Socials, Credits};
