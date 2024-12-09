import React from "react";

const channelItem = ({id, nombre}) => {
    return (
        <div key={id}>
            <a>
                {nombre}
            </a>
        </div>
    )
}

export default channelItem