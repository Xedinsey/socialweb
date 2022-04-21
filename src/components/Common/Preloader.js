import preloader from "../../assets/images/loader.svg"

import React from 'react';

const Preloader = (props) => {
    return (<>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center"
                }}
            >
                <img src={preloader} alt="loader" />
            </div>
    </>);
};

export default Preloader;