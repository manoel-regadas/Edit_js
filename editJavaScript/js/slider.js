//slick slider no challenge at all
$(document).ready(function(){       
    $('.gallery-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});


//gallery 
const galleryImg = document.querySelectorAll('.gallery-images');
const galleryImgJPG = document.querySelectorAll('.galery-images-img');

//modal 
const modal = document.querySelector('.gallery-modal');
const modalClose = modal.querySelectorAll('.gallery-modal-close');
const modalFigure = modal.querySelector('.gallery-modal-figure');
  //looping para ativar a modal da imagem selecionada 
    for(i = 0; i < galleryImg.length; i++){
      var images = galleryImg[i];
      var imagesJPG = galleryImgJPG[i];
      images.addEventListener("click", function(){
        const modalToShow = modal.style.display = 'flex';
        imagesJPG.classList.add('gallery-modal-img')
        modalFigure.appendChild(imagesJPG)
        return modalToShow
      })
    }
  //looping para fechar a modal
    for(i = 0; i < modalClose.length; i++){
      var close = modalClose[i];
      close.addEventListener("click", function(){
        const modalToclose = modal.style.display = 'none';
        return modalToclose;
      });
    }

