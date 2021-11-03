import {useState} from 'react'
import moment from 'moment'
import MovementCreate from './MovementCreate'
import Movement from './Movement'
import { AddOutline } from 'react-ionicons'

const LiftEditor = ({movements, selectedDate, createMovement, deleteMovement}) => {

    const [mode, setMode] = useState('show')

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
                    <button onClick={() => setMode('create')} className='movement-add'>
                        <AddOutline 
                            color={'#FFFFFF'}
                            height='25px'
                            width='25px'
                            title={'Add Movement'}
                        />
                    </button>
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