import {useState} from 'react'
import moment from 'moment'
import MovementCreate from './MovementCreate'
import Movement from './Movement'
import { AddOutline } from 'react-ionicons'
import { useEffect } from 'react/cjs/react.development'
import AnimateHeight from 'react-animate-height';

const LiftEditor = ({movements, selectedDate, createMovement, deleteMovement}) => {

    const [mode, setMode] = useState('show')

    useEffect( () => {
        setMode('show')
    }, [selectedDate])

    return (
        <div className="lift-editor-panel">
            <div className="notepad">
                <h1 className="notepad-title">
                    {moment(selectedDate).format('MMM Do, YYYY')}
                </h1>
                <div className="notepad-content" >
                    {mode === 'show'
                    ?
                    <>
                    {movements ? movements.map( movement => 
                        <Movement key={movement._id} {...movement} deleteMovement={deleteMovement} />
                    ) : <div className='movement-item'>No Movements</div>}
                    </>
                    :
                    <MovementCreate createMovement={createMovement} setMode={setMode}/>
                    }
                </div>
                <div className="notepad-footer">
                    <button onClick={() => setMode('create')} className='movement-add'>
                            <AddOutline 
                                color={'#d00054'}
                                height='35px'
                                width='35px'
                                title={'Add Movement'}
                            />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LiftEditor