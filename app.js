const blades=document.querySelector('.blades')
const buttons =document.querySelectorAll('.btn')

let slow= new Audio('slow.mp3')
let slower= new Audio('slower.mp3')
let fast= new Audio('fast.mp3')
let h1=document.querySelector('h1')

let fastest= new Audio('fastest.mp3')

let isFanRunning=false;







buttons.forEach((btn)=>{

    btn.addEventListener('click',(event)=>{

if(event.target.classList.contains('btn1')){



    blades.classList.add('blades2')



    slow.play();

    isFanRunning=true;
    

}     
else if(event.target.classList.contains('btn2')) {

    
    blades.classList.remove('blades2')

   slow.pause()
   slower.pause()
   fastest.pause()
   fast.pause()

   isFanRunning=false;




}  else if(event.target.classList.contains('btn3')){

    if(isFanRunning){

        blades.style.animationDuration= '2s'

        slower.play()
    }
   
   
   


}

else if(event.target.classList.contains('btn4')){

    if(isFanRunning){

        blades.style.animationDuration= '1s'

        slower.pause();


        setTimeout(() => {
         h1.style.display='block'

           h1.textContent='Hato Oye, Ab Ye Orega💀✈️'


            document.querySelector('.container').style.marginTop='0'
        }, 2000);

        setTimeout(() => {
            h1.style.display='none'

        }, 4000);


        fast.play()
    }

   

}

else if(event.target.classList.contains('btn5')){

    if(isFanRunning){
        blades.style.animationDuration= '0.2s'


        fast.pause()
        fastest.play()

        setTimeout(() => {
            h1.style.display='block'
            h1.textContent='Hato Bacho😂 🤣'

            document.querySelector('.container').style.marginTop='0'
        }, 2000);


        setTimeout(() => {

            h1.style.display='display'
            h1.textContent=''

            
        }, 4000);
        

    }

   

}

    })
    

})