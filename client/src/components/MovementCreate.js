import { useState } from "react"

const MovementCreate = () => {

    const [movement, setMovement] = useState({
        type: '',
        sets: []
    })

    return (
        <form>
            <fieldset className="movement-info">
                <legend className="highlight">Create a Movement</legend>
                <div className="movement-label">Movement Type:</div>
                <input type="text" name="type" value={movement.type} className="movement-input" onChange={event => setMovement({...movement, type:event.target.value})}></input>
                <div className="movement-label">Sets:</div>
                <div>
                    <input type="text" name="weight" placeholder="0" className="set-input" /> lbs
                    <input type="text" name="reps" placeholder="0" className="set-input" /> reps
                </div>
                <button type="button" className="pink-on-white">+ Add Set</button>
            </fieldset>
            <button className="add-movement">Create Movement</button>
        </form>
    )
}

export default MovementCreate