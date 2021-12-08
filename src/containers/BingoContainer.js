import { useState} from "react";
import RoundContainer from './RoundContainer';
import CurrentRound from "../components/CurrentRound";
import './BingoContainer.css';

const BingoContainer = () => {

    const [number, setNumber] = useState(null)
    const [round, setRound] = useState("")
    const [roundTracker, setRoundTracker] = useState([]);
    const [allRounds, setAllRounds] = useState({});
    const [currentlyRound1, setCurrentlyRound1] = useState(true);

    const handleStart = () => {
        setNumber("");
        setAllRounds({});
        setRoundTracker([]);
        setRound(1);
    }

    const handleNumberPicker = () => {
        const num = Math.ceil(Math.random() * 90);
        if (roundTracker.length === 0 || !roundTracker.includes(num)){
            
            setRoundTracker([...roundTracker,num])
            setNumber(num);
        }
        else if (roundTracker.includes(num)) {
            if (roundTracker.length < 90){
                handleNumberPicker();
            } else {
                setRoundTracker([...roundTracker,"stop"])
            }
        } 
        
    }
    const handleEndRound = () => {
        const currentRound  = {};
        currentRound[round] = roundTracker;

        setAllRounds(Object.assign({},allRounds,currentRound))
        if (round+1===2){
            setCurrentlyRound1(false);
        }
        setRound(round + 1);
        setRoundTracker([]);
        setNumber("");
    }





    return (
        <div>
            <div className="buttons">
                <button className="button-53 start" onClick={handleStart}>Start!</button>
                <button className="button-53 pick" onClick={handleNumberPicker}>Pick a Number!</button>
                <button className="button-53 end" onClick={handleEndRound}>End Round!</button>
            </div>
            <div className="bingo-number">
               <h1>{number}</h1> 
            </div>
            
            <CurrentRound roundTracker={roundTracker}/>
            <RoundContainer allRounds={allRounds} currentlyRound1={currentlyRound1} round={round}/>
        </div>
        
    )
}

export default BingoContainer;