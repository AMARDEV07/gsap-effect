function lodingAnimation(){
    

//loder remove code

var tl=gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5

})

tl.from("#line-part1",{
    opacity:0,
    onStart:function(){       

//contr 0 to 100 conting
var h5time=document.querySelector("#line-part1 h5")
var grow=0

setInterval(function(){
    if(grow<100){
        h5time.innerHTML=grow++
        console.log(grow)
    }
    else{
        h5time.innerHTML=grow
    }
    
},35)}

    })
    

    //loder remove animation..
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1
    })

tl.to("#loder",{
    opacity:0,
duration:0.2,
delay:4})

tl.from("#page1",{
     delay:0.2,
    y:1200,
    opacity:0,
    duration:0.5,
  
})

}






//cursur-------------------------------------------------


 
function cursuranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
         left:dets.x,
         top:dets.y
        });
     
     });


 Shery.makeMagnet("#nav-part2 h4");
    }
    lodingAnimation();
    cursuranimation();





