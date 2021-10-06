const animateIntro = () => {
    $('.intro-div').removeClass('login-box')
    $('.intro-text').css('display', 'block')
    $('.login-form').hide();

    $liftText = $('.lift-text')
    $mateText = $('.mate-text')
    $liftMateText = $('.liftmate-text')
    $introText = $('.intro-text')

    $liftText.removeClass('lift-text').hide()
    $mateText.removeClass('mate-text').hide()
    $liftMateText.removeClass('liftmate-text').hide()
    $introText.removeClass('intro-text').hide()

    setTimeout( () => {
        $liftText.addClass('lift-text').show()
        $mateText.addClass('mate-text').show()
        $liftMateText.addClass('liftmate-text').show()
        $introText.addClass('intro-text').show()
        setTimeout( () => {
            $('.intro-text').css('display', 'none')
            $('.intro-div').addClass('login-box')
            $('.login-form').fadeIn(500);
        }, 3000)
    }, 100)
}

$(document).ready( () => {
    animateIntro()
})