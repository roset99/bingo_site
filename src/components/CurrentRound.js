import { useState } from 'react';
import './CurrentRound.css';
const CurrentRound = ({roundTracker}) => {
    const [show, setShow] = useState(false);

    const numberSelected = (number) => {
        if (roundTracker===undefined){
            return false;
        } else if (roundTracker.includes(number)) {
            return true;
        } else {
            return false;
        }
    }

    const grid = [...Array(90).keys()].map( number => {
        const index = number;
        return(
            <h2 className={numberSelected(number + 1) ? "selected" : "unselected"}>{index + 1}</h2>

        )
    }
    )
    const handleViewCurrent = () => {
        setShow(!show);
    }
    return (
        <>
            <button onClick={handleViewCurrent} className="current-button">View Current Round!</button>
            <div className={show ? "current-round-container show-current" : "current-round-container hide-current"}>
                {grid}
            </div>
        </>
        
        
    )
}

export default CurrentRound;