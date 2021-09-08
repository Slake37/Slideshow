let leftImg = document.querySelectorAll('.left-img');
let rightImg = document.querySelectorAll('.right-img');
let nextImg = document.querySelector('.next');
let prevImg= document.querySelector('.previous');

localStorage.setItem('value1', 0);
nextImg.addEventListener('click',function(){
    let i=localStorage.getItem('value1');
    leftImg[i].style.top = '0';
    rightImg[i].style.bottom = '0';
    i++;
    localStorage.setItem('value1', `${i}`);
    console.log(i);
    
})



prevImg.addEventListener('click',function(){
   let j=localStorage.getItem('value1')-1;
   leftImg[j].style.top = '100%'
   rightImg[j].style.bottom = '100%'
    console.log(j);
    localStorage.setItem('value1', `${j}`);
    j--;
   
    }
)







