const img2 = document.querySelector('.img2')

window.addEventListener('keydown',(e)=>{
    if(e.key == 'l'){
        window.addEventListener('mousemove',(e)=>{
            img2.style.left = e.clientX +'px'
            img2.style.top = 0 +'px'
        })
    }
})

window.addEventListener('keydown',(e)=>{
    if(e.key == 'u'){
        window.addEventListener('mousemove',(e)=>{
            img2.style.left = 0 +'px'
            img2.style.top = e.clientY +'px'
        })
    }
})

window.addEventListener('mousemove',(e)=>{
    img2.style.left = e.clientX + 'px'
    img2.scroll.top = 0 + 'px'
})