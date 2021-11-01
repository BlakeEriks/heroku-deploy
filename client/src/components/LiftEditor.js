import React, {useEffect, useState} from 'react'
import MovementService from '../services/MovementService'
import moment from 'moment'
import MovementCreate from './MovementCreate'
import Movement from './Movement'

const LiftEditor = ({lift, selectedDate}) => {

    const [movements, setMovements] = useState([])
    const [mode, setMode] = useState('show')

    useEffect( () => {
        const updateMovements = () => {
            MovementService.getAllForLift(lift._id).then(res => {
                setMovements(res.data)
                setMode('show')
            })
        }
        if (lift._id) updateMovements()
    }, [lift])

    const deleteMovement = id => {
        MovementService.delete(id).then(res => {
            setMovements([...movements.filter(movement => movement._id !== id)])
        })
    }

    const createMovement = movement => {
        movement.lift_id = lift._id
        MovementService.create(movement).then( res => {
            setMovements([...movements, res.data])
            setMode('show')
        })
    }

    return (
        <div className="lift-editor-panel">
            <div className="notepad">
                <h1 className="notepad-title">
                    {moment(selectedDate).format('MMM Do, YYYY')}
                </h1>
                <div className="notepad-content">
                    {/* Movement Index */}
                    
                    {mode === 'show'
                    ?
                    <>
                    {movements.map( movement => 
                        <Movement key={movement._id} {...movement} deleteMovement={deleteMovement} />
                    )}
                    <button onClick={() => setMode('create')}>Add Movement</button>
                    </>
                    :
                    <MovementCreate createMovement={createMovement}/>
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