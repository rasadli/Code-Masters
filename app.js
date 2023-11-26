//navbar and gotop buttons wiev and display changes
window.addEventListener("scroll", function () {

    var header = document.querySelector("header");
    
    var up =this.document.querySelector("#gotop");

    if (window.scrollY >= 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    };

    if (window.scrollY >= 500) {

        up.classList.add("showup");

    }else{

        up.classList.remove("showup");
        
    };

});

//slider by clicking the numbers
var photes = ["./media/page1.jpg","./media/page2.jpg","./media/page3.jpg","./media/page4.jpg","./media/page5.jpg"]

var pgs=document.querySelectorAll(".page")

var pageN=1

pgs.forEach(item=>{

    item.addEventListener("click",function() {

        pgs.forEach(element=>{

            element.classList.remove("current"); 

        })

    })

    item.addEventListener("click",function(){

        this.classList.toggle("current")

        pageN=this.innerText-1
        
        for (let i = 0; i < photes.length; i++) {

            const photo = photes[pageN];

            document.getElementById("crrntImg").src=photo

        }

    })

})

//gotop button
var btn = document.getElementById("gotop");  

btn.addEventListener("click", function () {

    document.documentElement.scrollTop = 0; 
    
});


//automatic photo changer
var item = document.getElementById("codephoto");

var items = ["./media/code_ss_1.png", "./media/code_ss_2.png", "./media/code_ss_3.png", "./media/code_ss_4.png"];

let i = 1;

setInterval(function () {
    item.src = items[i]

    i ++

    if (i == items.length) {

        i = 0;

    }
 
}, 3000);