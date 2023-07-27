import React, { useEffect, useState } from "react";
import Quotes from "./insidebox";
import { Socials, Credits } from "./insidebox";



function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default function QuoteBox() {
    const [data, setData] = useState([]);
    const [color, setColor] = useState(getRandomColor())

    const apiGet = () => {
        fetch("https://api.api-ninjas.com/v1/quotes?limit=1?category=happiness", 
        {headers: {'X-Api-Key':"b2ItxEWBtVykTt7rZUIZZr5q0wrEKgnUsympPevH"}})
            .then((response) => response.json())
            .then((data) => setData(data[0]),
            setColor(getRandomColor()),
            document.documentElement.style.setProperty('--background-col1', color))
            .catch((error) => console.error("Error fetching quote:", error));
    }

    useEffect(() => {
        apiGet();
    }, [])

    return (
        <>
        <div id="quote-box">
            <Quotes apiData={data} apiNewRequest={apiGet}/>
            <Socials apiData={data}/>
        </div>
        <div id="footer">
            <Credits/>
        </div>
        </>
    );
}

