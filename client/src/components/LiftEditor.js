import React, {useEffect, useState} from 'react'
import MovementService from '../services/MovementService'

const LiftEditor = ({lift}) => {

    const [movements, setMovements] = useState([])

    useEffect( () => {
        const updateMovements = () => {
            MovementService.getAllForLift(lift._id).then(res => {
                setMovements(res.data)
            })
        }
        // console.log(lift, lift === true)
        if (lift._id) updateMovements()
    }, [lift])

    return (
        <div className="lift-editor-panel">
            <div className="notepad">
                <h1 className="notepad-title">
                    Notepad Title
                </h1>
                <div className="notepad-content">
                    {/* if lift */}
                    {/* Movement Index */}
                    {movements.map( (movement, index) => <div key={index}>{movement.type}</div>)}
                    {/* else */}
                    <button>    
                    Button Click For Create Lift
                    </button>
                    {/* <%- include('../partials/notepadButton', {request: "POST", queryUrl: `/lifts?date=${date.toLocaleDateString("en-US")}`, label: "Create Lift", className: ''}) %> */}
                </div>
            </div>
        </div>
    )
}

export default LiftEditor