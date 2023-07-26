import React from 'react';
import ReactDOM from 'react-dom/client';
import QuoteBox from './appcode';
import "./index.css"

function MyApp() {
    return (
            <QuoteBox/>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MyApp/>)