let nextBtn = document.querySelector('#next')
let leftSlide = document.querySelector('.left-side');
let rightSlide = document.querySelector('.right-side');



    nextBtn.addEventListener('click', function(){
    for(i=0; i<=100; i+25){
        if (i=25)
        leftSlide.style.transform = 'translateY('+i+'%)';
        rightSlide.style.transform = 'translateY(-'+i+'%)';
        break;
    }
})

