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

// ---------------bar de nav
function toggle(){
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('active');
}

