import './Round.css';
import { useState } from 'react';
const Round = ({roundNumbers, round}) => {


    const [showDetails, setShowDetails] = useState(false);
    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    }
    const numberSelected = (number) => {
        if (roundNumbers===undefined){
            return false;
        } else if (roundNumbers.includes(number)) {
            return true;
        } else {
            return false;
        }
    }

    const grid = [...Array(90).keys()].map( number => {
        return(
            <h2 className={numberSelected(number + 1) ? "selected" : "unselected"}>{number + 1}</h2>

        )
    }
        
    )
    return (
        <div>
            <button onClick={handleShowDetails} className="button-round-card">Details for round {round} </button>
            <div className={showDetails ? "show-card" : "hide-card"}>
                <div className="round-container">
                    {grid}
                </div>
            </div>
        </div>
        
        
    )
}

export default Round;