// calling all of the Html classes
const img2 = document.querySelector('.img2')

// horizontal movement
window.addEventListener('keydown',(e)=>{
    if(e.key == 'h'){
        window.addEventListener('mousemove',(e)=>{
            img2.style.left = e.clientX +'px'
            img2.style.top = 0 +'px'
        })
    }
})

// vertical movement
window.addEventListener('keydown',(e)=>{
    if(e.key == 'v'){
        window.addEventListener('mousemove',(e)=>{
            img2.style.left = 0 +'px'
            img2.style.top = e.clientY +'px'
        })
    }
})

// default movement of slider which is horizontal movement
window.addEventListener('mousemove',(e)=>{
    img2.style.left = e.clientX + 'px'
    img2.scroll.top = 0 + 'px'
})