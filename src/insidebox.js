import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTumblrSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";


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



function Socials({apiData}) {
    return (
        <div id="socials">
            <a class='twitter-share-button' href={`https://twitter.com/intent/tweet?text=${apiData.quote}`} id='tweet-quote' target='_blank'>
                <FontAwesomeIcon icon={faTwitterSquare} size="3x" className="my-icon"/>
            </a>
            <a href='#' id='tmblr-quote'>
                <FontAwesomeIcon icon={faTumblrSquare} size="3x" className="my-icon"/>
            </a>
        </div>
    )
}


function Credits() {
    return (
        <p id='credits'>made by <a href='#' id='by-anchor'>gsusk</a></p>
    )
}


export {Socials, Credits};
