/*  (Cursor movement)
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200+ "px"
});
*/

/* Cursor Movement using Gsap animations */

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