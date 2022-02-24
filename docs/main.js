const views=document.querySelector(".pageviews")
const price=document.querySelector(".cost")
const checkbox=document.querySelector(".checkbox")
const slider=document.querySelector(".range")
const pageviews=["10K","50K","100K","500K","1M"]
const cost=[8,12,16,24,36]
const color=[0,25,50,75,100]
let isYearly=false
checkbox.addEventListener("change",()=>{
    if(isYearly==false){
        isYearly=true
    }
    else{
        isYearly=false
    }
    update()
})
slider.addEventListener("input",()=>{
   update()
   slider.style.background=`linear-gradient(to right, hsl(174, 77%, 80%) ${color[slider.value]}%,hsl(224, 65%, 95%) 0%,hsl(224, 65%, 95%) 100%)`
})
function update(){
    if(isYearly){
        price.innerHTML=cost[slider.value]*0.75
    }
    else{
        price.innerHTML=cost[slider.value]
    }
    views.innerHTML=pageviews[slider.value]

}

