import { useState } from "react"
import { Button } from "../styles/Button";
import { HorizontalFlexBox } from "../styles/Container";

const MovementCreate = ({createMovement, setMode}) => {

    const [movementType, setMovementType] = useState('')

    const [sets, setSets] = useState([]);

    const updateSet = index => event => {
        let newSets = [...sets]
        newSets[index][event.target.name] = event.target.value;
        setSets([...newSets])
    }

    const onSubmit = event => {
        event.preventDefault()
        createMovement({type: movementType, sets})
        setMode('show')
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset className="movement-info">
                <legend className="highlight">Create a Movement</legend>
                <div className="movement-label">Movement Type:</div>
                <input type="text" name="type" value={movementType} className="movement-input" onChange={event => setMovementType(event.target.value)}></input>
                <div className="movement-label">Sets:</div>
                {sets.map( (set, index) => 
                    <div className='set-field' key={index}>
                        <input type="number" name="weight" value={set.weight} className="set-input" onChange={updateSet(index)}/> lbs
                        <input type="number" name="reps" value={set.reps} className="set-input" onChange={updateSet(index)}/> reps
                    </div>
                )}
                <button type="button" className="pink-on-white" onClick={() => setSets([...sets, {reps: '', weight: ''}])}>+ Add Set</button>
                <HorizontalFlexBox>
                    <Button type="reset" onClick={() => setMode('show')} >
                        <i className="fas fa-times medium accent"></i>
                    </Button>
                    <Button type="submit" >
                        <i className="fas fa-check medium accent"></i>
                    </Button>
                </HorizontalFlexBox>
            </fieldset>
        </form>
    )
}

export default MovementCreate