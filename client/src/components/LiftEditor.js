import React, {useEffect, useState} from 'react'
import MovementService from '../services/MovementService'
import moment from 'moment'
import MovementCreate from './MovementCreate'
import Movement from './Movement'

const LiftEditor = ({movements, selectedDate, createMovement}) => {

    const [mode, setMode] = useState('show')

    // useEffect( () => {
    //     const updateMovements = () => {
    //         MovementService.getAllForLift(lift._id).then(res => {
    //             setMovements(res.data)
    //             setMode('show')
    //         })
    //     }
    //     if (lift._id) updateMovements()
    // }, [lift])

    const deleteMovement = id => {
        // MovementService.delete(id).then(res => {
        //     setMovements([...movements.filter(movement => movement._id !== id)])
        // })
    }

    return (
        <div className="lift-editor-panel">
            <div className="notepad">
                <h1 className="notepad-title">
                    {moment(selectedDate).format('MMM Do, YYYY')}
                </h1>
                <div className="notepad-content">
                    {mode === 'show'
                    ?
                    <>
                    {movements && movements.map( movement => 
                        <Movement key={movement._id} {...movement} deleteMovement={deleteMovement} />
                    )}
                    <button onClick={() => setMode('create')}>Add Movement</button>
                    </>
                    :
                    <MovementCreate createMovement={createMovement} setMode={setMode}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default LiftEditor