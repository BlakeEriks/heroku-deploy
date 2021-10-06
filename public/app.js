$(document).ready( () => {
    setTimeout(() => {
        $('.intro-text').css('display', 'none')
        $('.intro-div').addClass('login-box')
        $('.login-form').fadeIn(500);
    }, 3000) 
})