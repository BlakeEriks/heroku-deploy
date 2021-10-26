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
                    {lift ?
                    movements.map( (movement, index) => 
                        <div className="movement-item" key={index}>
                            <a>
                            {movement.type} - {movement.sets.length} Sets 
                            </a>
                            <button type="button" class="movement-delete">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        )
                    :
                    <button>    
                        Button Click For Create Lift
                    </button>
                    /* <%- include('../partials/notepadButton', {request: "POST", queryUrl: `/lifts?date=${date.toLocaleDateString("en-US")}`, label: "Create Lift", className: ''}) %> */}
                </div>
            </div>
        </div>
    )
}

export default LiftEditor