gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from(".page2 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from(".page3  #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{//use h ki kisi poit p lga do then jb ap usa p jayago toh animation chalaga
        trigger:".page3 #circle",
        //jis place pa lga na h..
        scrollar:"body",
        markers:"true",
        start:"top 60%",
        end:"top 30%",
        scrub:true
        //for smothness or postion..
        //jn open hoga tb chla ga jb bnd hoga tb hat jayaga 

    }
})