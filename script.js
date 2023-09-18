var icon = document.querySelector("nav h2");
var menu = document.querySelector(".menu");
var li_one = document.querySelector(".li-one");
var li_two = document.querySelector(".li-two");
var li_three = document.querySelector(".li-three");
var li_four = document.querySelector(".li-four");
var li_five = document.querySelector(".li-five");

var flag = 0;

icon.addEventListener("click",function(){
    if(flag===0){
        menu.style.top ='0'
        icon.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag =1
    }
    else{
        menu.style.top = "-100%";
        icon.innerHTML = '<i class="ri-menu-3-line"></i>'
        flag = 0 

    }
})
li_one.addEventListener("click",function(){
    if(flag===0){
        menu.style.top ='0'
        icon.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag =1
    }
    else{
        menu.style.top = "-100%";
        icon.innerHTML = '<i class="ri-menu-3-line"></i>'
        flag = 0 

    }
})
li_two.addEventListener("click",function(){
    if(flag===0){
        menu.style.top ='0'
        icon.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag =1
    }
    else{
        menu.style.top = "-100%";
        icon.innerHTML = '<i class="ri-menu-3-line"></i>'
        flag = 0 

    }
})
li_three.addEventListener("click",function(){
    if(flag===0){
        menu.style.top ='0'
        icon.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag =1
    }
    else{
        menu.style.top = "-100%";
        icon.innerHTML = '<i class="ri-menu-3-line"></i>'
        flag = 0 

    }
})
li_four.addEventListener("click",function(){
    if(flag===0){
        menu.style.top ='0'
        icon.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag =1
    }
    else{
        menu.style.top = "-100%";
        icon.innerHTML = '<i class="ri-menu-3-line"></i>'
        flag = 0 

    }
})
li_five.addEventListener("click",function(){
    if(flag===0){
        menu.style.top ='0'
        icon.innerHTML = '<i class="ri-close-circle-fill"></i>'
        flag =1
    }
    else{
        menu.style.top = "-100%";
        icon.innerHTML = '<i class="ri-menu-3-line"></i>'
        flag = 0 

    }
})

gsap.from(".left h1,.left button ,.Box ", { 
    x: -1000,
    stagger:.2,
    duration:1,
     fill: 'blue', });




gsap.from(".right img", { 
    y: -1000,
    duration:1,
     fill: 'blue', });

     


  
    

     gsap.from(".topleft img",{
          
        scale:0,
          opacity:-1,
          scrollTrigger:{
          trigger: ".top",
          start:"top 70%",
          end:"top 50%",
          markers:false,
          scroller:"body",
          scrub:true,
          stagger:1.1,
        
          
          
          
        }
      });
     gsap.from(".topright img",{
          
          scale:0,
          opacity:-1,
          scrollTrigger:{
          trigger: ".topright",
          start:"top 70%",
          end:"top 50%",
          markers:false,
          scroller:"body",
          scrub:true,
        
          
          
          
        }
      });


     gsap.from(".b1 img ,.b2 img, .b3 img ",{
          
          rotate:10, 
          opacity:-1,
          stagger:.1,
          scrollTrigger:{
          trigger: ".b1",
          start:"top 70%",
          end:"top 40%",
          markers:false,
          scroller:"body",
          scrub:true,
          
      
          
          
          
        }
      });


     gsap.from(".rt1 img ,.rt2 img",{
          
          scale:-1, 
          opacity:-1,
          stagger:.1,
          scrollTrigger:{
          trigger: ".rtop",
          start:"top 70%",
          end:"top 40%",
          markers:false,
          scroller:"body",
          scrub:true,

          
        }
      });
     gsap.from(" .rb1 img, .rb2 img ",{
          
          scale:-1, 
          opacity:-1,
          stagger:.1,
          scrollTrigger:{
          trigger: ".rbottom",
          start:"top 70%",
          end:"top 40%",
          markers:false,
          scroller:"body",
          scrub:true,

          
        }
      });


     gsap.from(" .p41, .p42 ,.p43, .p44 ",{
          
          y:-100, 
          opacity:-1,
          stagger:.6,
          scrollTrigger:{
          trigger: ".p4bottom",
          start:"top 70%",
          end:"top 40%",
          markers:false,
          scroller:"body",
          scrub:true,

          
        }
      });



     gsap.from(" .p71 h1 ",{
          
          scale:-1, 
          opacity:-1,
          scrollTrigger:{
          trigger: ".p7top span h4",
          start:"top 50%",
          end:"top 40%",
          markers:false,
          scroller:"body",
          scrub:true,

          
        }
      });


  


      



























