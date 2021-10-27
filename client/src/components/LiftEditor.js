import React, {useEffect, useState} from 'react'
import MovementService from '../services/MovementService'
import moment from 'moment'
import MovementCreate from './MovementCreate'

const LiftEditor = ({lift}) => {

    const [movements, setMovements] = useState([])
    const [mode, setMode] = useState('show')

    useEffect( () => {
        const updateMovements = () => {
            MovementService.getAllForLift(lift._id).then(res => {
                setMovements(res.data.map( (movement, index) => 
                <div className="movement-item" key={index}>
                    <a>
                    {movement.type} - {movement.sets.length} Sets 
                    </a>
                    <button type="button" className="movement-delete">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                ))
            })
        }
        if (lift._id) updateMovements()
    }, [lift])

    return (
        <div className="lift-editor-panel">
            <div className="notepad">
                <h1 className="notepad-title">
                    {moment(lift.date).format('MMM Do, YYYY')}
                </h1>
                <div className="notepad-content">
                    {/* Movement Index */}
                    
                    {mode === 'show'
                    ?
                    <>
                    {movements}
                    <button onClick={() => setMode('create')}>Add Movement</button>
                    </>
                    :
                    <MovementCreate />
                    }
                    {/* <button onClick={() => setMode('create')}>    
                        Button Click For Create Lift
                    </button> */}
                    
                </div>
            </div>
        </div>
    )
}

export default LiftEditor