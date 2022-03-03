const btn=document.querySelector('.btn')
const dice=document.querySelector('.dice')
const h1=document.querySelector('.card h1')
const p=document.querySelector('.card p')
function getadvice(){
    fetch('https://api.adviceslip.com/advice').then((Response)=>{
        return Response.json()
    }).then((data)=>{
        h1.innerHTML=`Advice #${data.slip.id}`
        p.innerHTML=`${data.slip.advice}`              
    })
}
window.addEventListener('load',()=>{
    getadvice()    
})

btn.addEventListener('click',()=>{
      getadvice()
})

btn.addEventListener('mouseenter',()=>{
    dice.classList.add('active')
    dice.classList.remove('deactive')
})

btn.addEventListener('mouseleave',()=>{
    dice.classList.add('deactive')
    dice.classList.remove('active')
})