import React, { useState, useEffect, useRef } from "react";
import "../_app";
function Test() {
    const country = "yourCountry";
    const currency = "yourCurrency";
    const locale = "yourLocale";
    const originPlace = "yourOriginPlace";
    const destinationPlace = "yourDestinationPlace";
    const lengthOfStay = "yourLengthOfStay";
    const outboundPartialDate = "yourOutboundPartialDate";
    const inboundPartialDate = "yourInboundPartialDate";
    const apiKey = "yourApiKey";
    const url = `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/monthly?destination=%20${destinationPlace}&origin=${originPlace}&length=${lengthOfStay}&currency=${currency}`;
    const callAPI = async () => {
        try {
            const res = await fetch(
                url, {
                'X-Access-Token': '<REQUIRED>',
                'X-RapidAPI-Key': '7a9c655dc0msh8214793a4437402p1827dejsnf31ba0290672',
                'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
            }
            );

            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div>
                <button onClick={callAPI}>call</button>
            </div>
        </>
    );
}

export default Test;
