
//   var h1text=document.querySelector("#first").textContent
// //acess
// var splitedtext=h1text.split("")
// //slpit word and sorte array
// var clutter=""
// splitedtext.forEach(function(elem){
//     // traves loop
    
//     clutter+=`<span>${elem}</span>`

// })
// document.querySelector("#first").innerHTML=clutter
// // create span tag and put it in 




//select all
var allh1=document.querySelectorAll("#page2 h1")
//all pa loop 
 allh1.forEach(function(elem){
    var h1text=elem.textContent
   var textsplit= h1text.split("")
   var clutter=""
   textsplit.forEach(function(e)
   {
    clutter+= `<span>${e}</span>`
   })
   elem.innerHTML=clutter

})


gsap.to("#page2 h1 span",{
    color:"#e3e3c4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h1",//use to target element..
        scroller:"body",
        markers:true,//for marker
        start:"top 50%",
        end:"top 10%",
        scrub:1
    }
   
   
})
