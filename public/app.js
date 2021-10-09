const animateIntro = () => {
    $('.intro-div').removeClass('login-box')
    $('.intro-text').css('display', 'block')
    $('.login-form').hide();

    $liftText = $('.lift-text')
    $mateText = $('.mate-text')
    $liftMateText = $('.liftmate-text')
    $introText = $('.intro-text')

    $liftText.css('animation-name', '')
    $mateText.css('animation-name', '')
    $liftMateText.css('animation-name', '')
    $introText.css('animation-name', '')

    setTimeout( () => {
        $liftText.css('animation-name', 'lift-text-move-right')
        $mateText.css('animation-name', 'mate-text-move-left')
        $liftMateText.css('animation-name', 'lift-mate-text')
        $introText.css('animation-name', 'fade-out')

        setTimeout( () => {
            $('.intro-text').css('display', 'none')
            $('.intro-div').addClass('login-box')
            $('.login-form').fadeIn(500);
        }, 3000)
    }, 100)
}

const formatDate = date => {

}

const populateCalendar = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

    $calendar = $('.calendar')
    let today = new Date()
    let date = new Date(today.getFullYear(), today.getMonth(), 1)
    $calendar.append($('<div>').addClass('calendar-title').text(monthNames[today.getMonth()]))
    let weekDiv = $('<div>').addClass('calendar-week').addClass('first-week');

    while (date.getMonth() === today.getMonth()) {
        if (date.getDay() === 0) {
            if (date.getDate() !== 1) $calendar.append(weekDiv)
            weekDiv = $('<div>').addClass('calendar-week')
        }
        let day = $('<a><div></div></a>').attr('href', `/lifts?date=${date.toLocaleDateString("en-US")}`).addClass('calendar-day').text(date.getDate());
        weekDiv.append(day)
        date.setDate(date.getDate() + 1);
    }
}