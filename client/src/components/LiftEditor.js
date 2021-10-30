import React, {useEffect, useState} from 'react'
import MovementService from '../services/MovementService'
import moment from 'moment'
import MovementCreate from './MovementCreate'
import Movement from './Movement'

const LiftEditor = ({lift}) => {

    const [movements, setMovements] = useState([])
    const [mode, setMode] = useState('show')

    useEffect( () => {
        const updateMovements = () => {
            MovementService.getAllForLift(lift._id).then(res => {
                setMovements(res.data.map( (movement, index) => 
                    <Movement key={movement._id} {...movement}/>
                ))
            })
        }
        if (lift._id) updateMovements()
    }, [lift])

    const createMovement = movement => {
        console.log(lift)
        movement.lift_id = lift._id
        console.log(movement)
        MovementService.create(movement).then( res => {
            console.log(res)
            setMovements([...movements, <Movement key={res.data._id} {...res.data} />])
            setMode('show')
        })
    }

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