import React, {useState} from 'react'

function reacthooks() {
    const [buttonText, setButtonText] = useState("Click me, please")

    return (
        <div>
            <button onClick={() => setButtonText("thanks for clicking me ")}></button>
        </div>
    )
}

export default reacthooks
