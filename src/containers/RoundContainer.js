// import { useState } from 'react';
import Round from '../components/Round';
import './RoundContainer.css'

const RoundContainer = ({allRounds, currentlyRound1, round}) => {
    const range = [...Array(round).keys()];

    


    const roundComponents = range.map(index => {
        if (currentlyRound1 || index === round - 1){
            return(
                <></>
            )
        } else {
            return (
                <div>
                    
                    
                    <Round  roundNumbers={allRounds[index + 1]} round={index +1}/>
                    
                    
                </div>
                
            )
        }
        
    })

    return (
        <div>
            {roundComponents}
        </div>
    )
}
export default RoundContainer;