import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import LiftEditor from './LiftEditor'
import Calendar from './Calendar'
import MovementService from '../services/MovementService'

const LiftMate = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [liftsThisMonth, setLiftsThisMonth] = useState({})

    const addMovementToSelectedDay = movement => {
        let newLiftsThisMonth = {...liftsThisMonth}, date = selectedDate.getDate()
        if (!newLiftsThisMonth[date]) newLiftsThisMonth[date] = []
        newLiftsThisMonth[date].push(movement)
        setLiftsThisMonth(newLiftsThisMonth)
    }

    useEffect( () => {
        MovementService.getAllForMonth(selectedMonth).then( res => {
            let liftsThisMonth = {}
            res.data.forEach(movement => {
                let date = new Date(movement.date).getDate()
                if (!liftsThisMonth[date]) liftsThisMonth[date] = []
                liftsThisMonth[date].push(movement)
            })
            setLiftsThisMonth({...liftsThisMonth})
        })
    }, [selectedMonth])

    const createMovement = movement => {
        movement.date = selectedDate.toLocaleDateString()
        MovementService.create(movement).then(res => {
            addMovementToSelectedDay(res.data)
        })
    }

    const deleteMovement = id => {
        MovementService.delete(id).then(res => {
            const newLiftsThisMonth = {...liftsThisMonth}
            if (newLiftsThisMonth[selectedDate.getDate()].length === 1) {
                newLiftsThisMonth[selectedDate.getDate()] = undefined
            }
            else {
                newLiftsThisMonth[selectedDate.getDate()] = [...newLiftsThisMonth[selectedDate.getDate()].filter(movement => movement._id !== id)]
            }
            setLiftsThisMonth(newLiftsThisMonth)
        })
    }

    return (
        <>
        <Navbar />
        <main>
            <LiftEditor selectedDate={selectedDate} movements={liftsThisMonth[selectedDate.getDate()]} createMovement={createMovement} deleteMovement={deleteMovement}/>
            <div className="main-divider"></div>
            <Calendar lifts={liftsThisMonth} setSelectedDate={setSelectedDate} selectedDate={selectedDate} selectedMonth={selectedMonth}/>
        </main>
        </>
    )

}

export default LiftMate