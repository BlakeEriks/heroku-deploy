const Calendar = ({lifts}) => {

    // const monthNames = ["January", "February", "March", "April", "May", "June",
    // "July", "August", "September", "October", "November", "December"]

    const calendar = constructCalendar(lifts);

    return (
        <div className="lift-viewer-panel">
            <div className="calendar">
                <div className='calendar-title'>October</div>

                <div className='calendar-heading' style={{marginBottom: '10px'}}>
                    <div className="calendar-heading-label">S</div>
                    <div className="calendar-heading-label">M</div>
                    <div className="calendar-heading-label">T</div>
                    <div className="calendar-heading-label">W</div>
                    <div className="calendar-heading-label">T</div>
                    <div className="calendar-heading-label">F</div>
                    <div className="calendar-heading-label">S</div>
                </div>

                {/* Calendar here */}
                <div className='calendar-content'>
                {calendar}
                </div>
                {/* <%- include('../partials/calendar') %>  */}
            </div>
        </div>
    )
}

const constructCalendar = lifts => {
    let weeks = []
    let today = new Date()
    let date = new Date(today.getFullYear(), today.getMonth(), 1)
    let week = []
    
    while (date.getMonth() === today.getMonth()) {

        if (date.getDay() === 0) {
            weeks.push(
                <div className='calendar-week' key={date.getDate()}>
                    {week}
                </div>
            )
            week = []
        }
        week.push(
            <a href='/' className='calendar-day' key={date.getDate()}>
                <div>
                    {date.getDate()}{ (lifts.some(lift => new Date(lift.date).getDate() === date.getDate())) ? '*' : ''}
                </div>
            </a>
        )
        date.setDate(date.getDate() + 1);
    }
    if (week.length > 0) {
        weeks.push(
        <div className='calendar-week' key={date.getDate()}>
            {week}
        </div>)
    }
    return weeks;
}

export default Calendar