
//Tentei fazer usando um 'for' pra ficar o mais dinâmico possível.. Falhei Miseravelmente hehehe.

// const productFigure = document.querySelector(".protduct-details-container")
// const productMainImge = productFigure.querySelector('.protduct-details-figure-img')
// const productLisImg = document.querySelectorAll('.product-images')

// for(i = 0; i < productLisImg.length; i++){
//     var img = productLisImg[i];
//     var imgJpg = `<img class="protduct-details-figure-img" src="img/details/${i}.jpg">`
//     img.addEventListener('mouseover', function(){
//       productFigure.removeChild(productMainImge);
//       var newImg = productFigure.innerHTML = imgJpg
//       return newImg
//     })
    
// }

//Eu também tentei fazer usando objeto, mas também não consegui, tive que fazer de um jeito menos dinâmico :/

    const productContainer = document.querySelector('.protduct-details-container')
    const liImg = document.querySelectorAll('.protduct-details-smallIMG');
    const liImgToArray = Array.prototype.slice.call(liImg);
    const image1 = document.querySelector('#image-01')
    const image2 = document.querySelector('#image-02')
    const image3 = document.querySelector('#image-03')
    const image4 = document.querySelector('#image-04')
    // função que retorna um img com literals para o nome da imagem
const changeImages = () =>{
    const replace = (imageName) =>{
        return productContainer.innerHTML = `<img class="protduct-details-figure-img" src="img/details/${imageName}.jpg">`
    }
    const removeClass = (element, className) =>{
        for(i = 0; i < element.length; i++){
            element[i].classList.remove(className); 
        }
    }
    image1.addEventListener('mouseover', function(){  
        removeClass(liImg, 'imgShadow')
        liImgToArray[0].classList.toggle('imgShadow')       
        return replace('1')
        })
    image2.addEventListener('mouseover', function(){ 
        removeClass(liImg, 'imgShadow')
        liImgToArray[1].classList.toggle('imgShadow')               
        return replace('2')
        })
    image3.addEventListener('mouseover', function(){   
        removeClass(liImg, 'imgShadow')
        liImgToArray[2].classList.toggle('imgShadow')                  
        return replace('3')
        })
    image4.addEventListener('mouseover', function(){  
        removeClass(liImg, 'imgShadow')
        liImgToArray[3].classList.toggle('imgShadow')          
        return replace('4')
        })
}
changeImages()
