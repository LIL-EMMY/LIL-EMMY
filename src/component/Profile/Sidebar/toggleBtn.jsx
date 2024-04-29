import React, { useState } from 'react'

const ToggleTextBtn  = ({defaultText, hiddenText}) => {
    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);

    }

    return(
        <div>
            <button onClick={toggleText}>Toggle Text</button>
            {showText ? <p>{hiddenText}</p> : <p>{defaultText}</p>}
        </div>
    )
}

export default ToggleTextBtn