import React, {useEffect, useState} from 'react'
import LiftService from '../services/LiftService'
import Navbar from './Navbar'
import LiftEditor from './LiftEditor'
import Calendar from './Calendar'

const LiftMate = () => {
    //eslint-disable-next-line
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    //eslint-disable-next-line
    const [lift, setLift] = useState({})
    const [liftsThisMonth, setLiftsThisMonth] = useState([])

    useEffect( () => {
        LiftService.getByDate(selectedDate).then( lift => {
            console.log(lift)
            setLift(lift)
        })
    }, [selectedDate])

    useEffect( () => {
        LiftService.getAllForMonth(selectedMonth).then( lifts => {
            console.log(lifts.data)
            setLiftsThisMonth(lifts.data)
        })
    }, [selectedMonth])

    return (
        <>
        <Navbar />
        <main>
            <LiftEditor />
            <div className="main-divider"></div>
            <Calendar lifts={liftsThisMonth}/>
        </main>
        </>
    )

}

export default LiftMate