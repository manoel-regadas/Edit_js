
//slider and burger
const naviTransition = () =>{
    const hamburger = document.querySelector('.hamburger')
    const navibar = document.querySelector('.seccoes_navi')
    const navUtils = document.querySelector('.navi-utils')

    //hamburgerToX
    const hamburgerTop = document.querySelector('.hamburger-top');
    const hamburgerMiddle = document.querySelector('.hamburger-middle');
    const hamburgerBottom = document.querySelector('.hamburger-bottom');

    hamburger.addEventListener('click', () => {
        navibar.classList.toggle('seccoes_navi_active');
        hamburgerTop.classList.toggle('hamburger-top-toX');
        hamburgerMiddle.classList.toggle('hamburger-middle-toX');
        hamburgerBottom.classList.toggle('hamburger-bottom-toX');
    });
}
naviTransition()

//search reSize
const searchResize = () =>{
    const search = document.querySelector('.search-input')

    search.addEventListener('click', (event) => {
         event = search
         event.classList.toggle('input_big')
         search.value = ''
     })
}
searchResize()

//bg da navibar quando faz o scroll (tá em Jquery pois já tinha feito antes)
$(document).ready(function(){       
    var scroll_menu = 0;
    $(document).scroll(function() { 
        scroll_menu = $(this).scrollTop();
        if(scroll_menu > 5) {
            $(".navi_bar").addClass("bg_menu");
        } 
        if(scroll_menu < 5) {
            $(".navi_bar").removeClass("bg_menu");
        } 
    });
});


