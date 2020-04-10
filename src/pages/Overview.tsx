import React from 'react';

const Overview = () => {
    return <>
        0 This is an overview <br/>
        1 This is an overview <br/>
        2 This is an overview <br/>
        3 This is an overview <br/>
        4 This is an overview <br/>
        5 This is an overview <br/>
        6 This is an overview <br/>
        7 This is an overview <br/>
        8 This is an overview <br/>
        9 This is an overview <br/>
        10 This is an overview <br/>
        11 This is an overview <br/>
        12 This is an overview <br/>
        13 This is an overview <br/>
        14 This is an overview <br/>
        15 This is an overview <br/>
        16 This is an overview <br/>
        17 This is an overview <br/>
        18 This is an overview <br/>
        19 This is an overview <br/>
        20 This is an overview <br/>
        21 This is an overview <br/>
        22 This is an overview <br/>
        23 This is an overview <br/>
        24 This is an overview <br/>
        25 This is an overview <br/>
        26 This is an overview <br/>
        27 This is an overview <br/>
        28 This is an overview <br/>
        29 This is an overview <br/>
        30 This is an overview <br/>
        31 This is an overview <br/>
        32 This is an overview <br/>
        33 This is an overview <br/>
        34 This is an overview <br/>
        35 This is an overview <br/>
        36 This is an overview <br/>
        37 This is an overview <br/>
        38 This is an overview <br/>
        39 This is an overview <br/>
    </>
}

const isToday = (someDate: Date) => {
    const today = new Date(); 
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}

export default Overview;