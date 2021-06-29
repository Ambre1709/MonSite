// ---------------btn scroll to top
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
rootElement.scrollTo({
top: 0,
behavior: "smooth"
})
}
scrollToTopBtn.addEventListener("click", scrollToTop)

// ---------------bar de nav, on click
$(document).on('click', 'ul a', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

// ---------------scroll to top si actualisation de la page
$(document).ready(function(){
    $(this).scrollTop(0);
});