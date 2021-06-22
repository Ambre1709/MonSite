// ---------------bar de nav, on click
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

// ---------------scroll to top si actualisation de la page
$(document).ready(function(){
    $(this).scrollTop(0);
});