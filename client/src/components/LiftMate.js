import React, {useEffect, useState} from 'react'
import LiftService from '../services/LiftService'
import Navbar from './Navbar'
import LiftEditor from './LiftEditor'
import Calendar from './Calendar'

const LiftMate = () => {
    //eslint-disable-next-line
    const [selectedDate, setSelectedDate] = useState(new Date())
    //eslint-disable-next-line
    const [lift, setLift] = useState({})

    useEffect( () => {
        LiftService.getByDate(selectedDate).then( lift => {
            console.log(lift)
            setLift(lift)
        })
    }, [selectedDate])

    return (
        <>
        <Navbar />
        <main>
            <LiftEditor />
            <div className="main-divider"></div>
            <Calendar />
        </main>
        </>
    )

}

export default LiftMate