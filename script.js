var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

/* (Cursor movement) 
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200+ "px"
});
*/

/* Cursor Movement using Gsap animations 

document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.2, // Smooth transition
        ease: "power2.out"
    });

    gsap.to("#cursor-blur", {
        x: dets.clientX - 200,
        y: dets.clientY - 200,
        duration: 0.4,
        ease: "power2.out"
    });
});
*/

document.addEventListener("mousemove", function (event) {
    gsap.to(crsr, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5, // Faster response
        ease: "power2.out"
    });

    gsap.to(blur, {
        x: event.clientX - 200,
        y: event.clientY - 200,
        duration: 1,
        ease: "power2.out"
    });
});

/* Navbar Hover Effects

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    });
});
*/

/* Navbar Hover Effects */
document.querySelectorAll("#nav h4").forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
        gsap.to(crsr, {
            pointerEvents: "none",
            scale: 3,
            border: "1px solid #fff",
            backgroundColor: "transparent",
            duration: 0.2,
            ease: "power3.out"
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(crsr, {
            pointerEvents: "none",
            scale: 1,
            border: "1px solid #95C11E",
            backgroundColor: "#95C11E",
            duration: 0.2,
            ease: "power3.out"
        });
    });
});

gsap.to("#nav",{
    backgroundColor : "#000",
    duration : "0.5",
    height : "110px",
    scrollTrigger :{
        trigger : "#nav",
        scroller : "body",
        //markers : true,
        start : "top -5%",
        end : "top -15%",
        scrub : 1 
    }
});

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger :{
        trigger : "#main",
        scroller : "body",
        //markers : true,
        start : "top -25%",
        end : "top -75%",
        scrub : 2
    }
});

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers :true,
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
});

// Set the initial state with GSAP
gsap.set(".card", { scale: 0.9, opacity: 0 });

gsap.to(".card", {
    scale: 1, // Restoring scale on scroll
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
});

// Handle hover effect with GSAP (instead of CSS)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(".card", { 
            rotateX: -10, 
            rotateY: 10, 
            duration: 0.2 
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(".card", { 
            rotateX: 0, 
            rotateY: 0, 
            duration: 0.2 
        });
    });
});

gsap.from("#comma1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#comma1",
        scroller:"body",
        //markers :true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
});

gsap.from("#comma2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#comma2",
        scroller:"body",
        //markers :true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
});