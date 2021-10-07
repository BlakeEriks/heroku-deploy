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