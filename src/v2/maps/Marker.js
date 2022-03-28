import React from "react";

const Marker = ({ markerId, tooltip, $hover, openInfo, }) => {
    const handleClick = () => {
        openInfo(markerId);
    };

    return (
        <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
            <span className="circleText" title={tooltip}>
                {markerId}
            </span>
        </div>
    );
};

export default Marker;
