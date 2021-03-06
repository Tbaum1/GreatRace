var lilo = document.getElementById("lilo");
var stitch = document.getElementById("stitch");
var lights = document.getElementById("lights");
var finish = document.getElementById("finish");
var winner = document.getElementById("winner");
finish.addEventListener("click", start);
document.getElementById("start").addEventListener("click", timer);
var liloOffset = lilo.offsetLeft;
var stitchOffset = stitch.offsetLeft;
var startTimer;
//calling the start funtion to set all players and lights 
start();

//remove listener from the greenlight and starting timer
function timer(){    
    document.getElementById("start").removeEventListener("click", timer);    
    startTimer = setInterval(race, 100);
}

/*sets the players properties
  console.logging the offset of each player
 */
 function start(){   
    document.getElementById("start").addEventListener("click", timer); 
    liloOffset = 150;
    stitchOffset =150;
    finish.className = "hide";
    lilo.style.display = "inline-block";
    stitch.style.display = "inline-block";
    lilo.style.position= "absolute";
    lilo.style.left = "150px";
    lilo.style.top = "120px";
    stitch.style.position = "absolute";
    stitch.style.left = "145px";
    stitch.style.top = "170px";
    console.log(stitchOffset);
    console.log(liloOffset);
    lights.style.position = "absolute";
    lights.style.bottom = "5px";
    //window.location.reload();
}

//removes ligt click listener, starts race
function race(){     
    document.getElementById("start").removeEventListener("click", timer);
    console.log(stitchOffset);
    console.log(liloOffset);     
    lights.src = "greenlight1.png";
    
    var liloTopOffset = lilo.offsetTop;
    var stitchTopOffset = stitch.offsetTop;
    
    var rand1 = Math.ceil(Math.random() * 15); 
    var rand2 = Math.ceil(Math.random() * 15); 
    
    if(liloOffset <= 915){        
        liloOffset += rand1;
        lilo.style.left = liloOffset + "px";              
    }else if(liloOffset >= 910){
            clearInterval(startTimer);            
            liloWin();
    }
    
    if(stitchOffset <= 915){
        stitchOffset += rand2;
        stitch.style.left = stitchOffset + "px";
    }else if(stitchOffset >= 910){
            clearInterval(startTimer);            
            stitchWin();            
        }          
        
    /*if(liloTopOffset >= 20 && liloOffset >= 894){
        liloTopOffset += rand1;
        lilo.style.top = liloTopOffset + "px";
    }
    if(stitchTopOffset >= 45 && stitchOffset >= 894){
        stitchTopOffset += rand2;
        stitch.style.top = stitchTopOffset + "px";
        //alert(rand2);
    }
    if(liloOffset >= 555){
        clearInterval(timer);
    }
    if(stitchTopOffset >= 137 && stitchOffset <= 890){
        stitchOffset += rand1;
        stitch.style.left = -stitchOffset + "px";
    } */
}

//setting the winner lilo img 
function liloWin(){
    //alert("lilo");
    winner.src = "lilo.png";
    lilo.style.display = "none";
    stitch.style.display = "none";        
    finish.className = "show";
    lights.src = "redlight.png";
}

//setting the winning stitch img
function stitchWin(){
    //alert("stitch");
    winner.src = "stitch.png";
    lilo.style.display = "none";
    stitch.style.display = "none";
    finish.className = "show"; 
    lights.src = "redlight.png";      
}





