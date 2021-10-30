import { useState } from "react"

const MovementCreate = ({createMovement}) => {

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
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset className="movement-info">
                <legend className="highlight">Create a Movement</legend>
                <div className="movement-label">Movement Type:</div>
                <input type="text" name="type" value={movementType} className="movement-input" onChange={event => setMovementType(event.target.value)}></input>
                <div className="movement-label">Sets:</div>
                {sets.map( (set, index) => 
                    <div key={index}>
                        <input type="number" name="weight" value={set.weight} className="set-input" onChange={updateSet(index)}/> lbs
                        <input type="number" name="reps" value={set.reps} className="set-input" onChange={updateSet(index)}/> reps
                    </div>
                )}
                {/* <div>
                    <input type="text" name="weight" placeholder="0" className="set-input" /> lbs
                    <input type="text" name="reps" placeholder="0" className="set-input" /> reps
                </div> */}
                <button type="button" className="pink-on-white" onClick={() => setSets([...sets, {reps: '', weight: ''}])}>+ Add Set</button>
            </fieldset>
            <button type="submit" className="add-movement">Create Movement</button>
        </form>
    )
}

export default MovementCreate