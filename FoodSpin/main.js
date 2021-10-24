

// tao du lieu thay doi gia tri trong content 

var i = 0;
var color = ["#FF922C","#54BF29","#2DA5F5","#F85430","#2C59F9"];
var img = ["./Media/product5.png","./Media/product6.png","./Media/product7.png","./Media/product8.png","./Media/product14.png"];
var background = ["#FFEEDE","#EAFFE2","#96D5FF","#FFB1A0","#98ADF5"]
var price = ["$32","$35","$40","53$","$55"];
var content = ["Green Goddess","Asian Cucumber","Chickendunk","Spaghetti 2021","Lobster Seafood"];
var des = ["It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ","Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!","It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken dunk","Like many other pasta types of pasta, spaghetti is made from ground flour and water.","Lobster is made from ground flour and water."];
var contents = ["Chicken Salad","Salad","chickendunk","Spaghetti","Lobster canada"];

//end thay doi gia tri trong content





// ----------------------- Khoi tao bien circle ------------------------------- 

var circlegraph  = document.querySelector(".ciclegraph");
var circleElements = document.querySelectorAll(".circle");

var circle = document.getElementById("load");

var rotateValue = circle.style.transform;
var rotateSum;

//
let angle = 360 - 90;
let dangle = 360 / circleElements.length;

for (let i = 0; i < circleElements.length; i++) {
 let circle = circleElements[i];
 angle += dangle;
 circle.style.transform = `rotate(${angle}deg) translate(${circlegraph.clientWidth /
   2}px) rotate(-${angle}deg)`;
}
// end ----- circle ---------------------------------------


//  ---------------Button click add up and down cicrle----------------- 

// -------------------- Button UP and spin thay đổi giá trị -------------- 
function up(){
   var up =  document.getElementById("up");
    var circle = document.getElementById("load");
    let spinroate = document.querySelector(".spinbackground")
    let button = document.querySelector(".btn");
    let scrollup = document.querySelector(".btnscroll");
    let scrolldown = document.querySelector(".btnscrollright");
    let activeproduct = document.getElementById("imgactive");
    let contentprice = document.querySelector(".content-price");
    let contenttitle = document.querySelector(".content-title");
    let contenttitles = document.querySelector(".content-titles");
    let contentdes = document.querySelector(".content-des");
    let btn = document.querySelector(".btn") ;
   var rotateValue = circle.style.transform;
   var rotateSum;

   rotateSum = rotateValue + "rotate(36deg)";
   circle.style.transform = rotateSum;
   rotateValue = rotateSum;
   //Process
   i--;
   if(i<0){
      i = 4;
   }
   
   contentprice.innerText = price[i];
   contenttitle.innerText = content[i];
   contenttitles.innerText = contents[i];
   contentdes.innerText = des[i];
   button.style.backgroundColor = color[i];
   spinroate.style.backgroundColor = background[i];
   contentprice.style.color = color[i];
   scrollup.style.backgroundColor = color[i];
   scrolldown.style.backgroundColor = color[i];
   activeproduct.src = img[i];
   
}

// ------------------------------- end ---------------------------------


// -------------------- Button DOWN and spin thay đổi giá trị -------------- 

function down(){
    var down =  document.getElementById("down");
    var circle = document.getElementById("load");
    let contentprice = document.querySelector(".content-price");
    let contenttitle = document.querySelector(".content-title");
    let contenttitles = document.querySelector(".content-titles");
    let contentdes = document.querySelector(".content-des");
    let button = document.querySelector(".btn");
    let spinroate = document.querySelector(".spinbackground");
    let scrollup = document.querySelector(".btnscroll");
    let scrolldown = document.querySelector(".btnscrollright");
    let activeproduct = document.getElementById("imgactive");

    var rotateValue = circle.style.transform;
    var rotateSum;
    
    activeproduct.style.animation = "leaves 2.5s ease-in-out infinite alternate"
   

    
    rotateSum = rotateValue + "rotate(-36deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    

  
   
    i = i < (price.length -1,content.length -1 ,contents.length -1 ,des.length -1,color.length -1)  ? ++i : 0;
    
      contentprice.innerText = price[i];
      contenttitle.innerText = content[i];
      contenttitles.innerText = contents[i];
      contentdes.innerText = des[i];
      button.style.backgroundColor = color[i];
      spinroate.style.backgroundColor = background[i];
      scrollup.style.backgroundColor = color[i];
      scrolldown.style.backgroundColor = color[i];
      contentprice.style.color = color[i];
      
      activeproduct.src = img[i];
      
 }

 // -------------------- END Button DOWN  and spin thay đổi giá trị -------------- 

 // ICREMENT BUTTON CART ()

 function ircrementButton(){
    var element = document.querySelector(".icrementText");
    var value = element.innerHTML;
    value++;

    console.log(value);
    element.innerHTML = value;

    element.style.animation = "scale 1s ease-in-out"
    
 }