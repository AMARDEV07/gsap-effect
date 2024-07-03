gsap.to("#page2 img",{
    width:"80%",
    scrollTrigger:{
        trigger:"#page2",//use to target element..
        scroller:"body",
        markers:true,//for marker
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true

    }
})


//horziontal scroll
gsap.to("#page3 h1",{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#page3",//use to target element..
        scroller:"body",
        markers:true,//for marker
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true

    }

})