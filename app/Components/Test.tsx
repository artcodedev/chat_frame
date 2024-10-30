
'use client'

import React, { useEffect, useRef } from "react";

const Test = () => {
   
    const some = () => {

        console.log("some");

        if (window && window.parent) {
            window.parent.postMessage(JSON.stringify({
                event: 'gtm.click',
                'gtm.elementUrl': 'https://www.simoahava.com',
                pageTitle: "test true"
            }), '*');
          }

    }


    return (
        <>
            <div id="main-app" className=''>
                <div className='container d-flex direction-column h-100-p overflow-hidden bg-rio'>
                    <button onClick={some}>some</button>
                </div>
            </div>

        </>
    );
}

export default Test;