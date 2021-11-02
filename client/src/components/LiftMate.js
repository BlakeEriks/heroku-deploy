import React, {useEffect, useState} from 'react'
import LiftService from '../services/LiftService'
import Navbar from './Navbar'
import LiftEditor from './LiftEditor'
import Calendar from './Calendar'

const LiftMate = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [lift, setLift] = useState({})
    const [liftsThisMonth, setLiftsThisMonth] = useState([])

    useEffect( () => {
        LiftService.getByDate(selectedDate).then( res => {
            setLift(res.data)
        })
    }, [selectedDate])

    useEffect( () => {
        LiftService.getAllForMonth(selectedMonth).then( lifts => {
            setLiftsThisMonth(lifts.data)
        })
    }, [selectedMonth])

    const createLift = async () => {
        let lift = (await LiftService.create({date: selectedDate})).data
        setLift(lift)
        setLiftsThisMonth([...liftsThisMonth, lift])
        return lift
    }

    return (
        <>
        <Navbar />
        <main>
            <LiftEditor lift={lift} selectedDate={selectedDate} createLift={createLift}/>
            <div className="main-divider"></div>
            <Calendar lifts={liftsThisMonth} setSelectedDate={setSelectedDate} selectedDate={selectedDate} selectedMonth={selectedMonth}/>
        </main>
        </>
    )

}

export default LiftMate