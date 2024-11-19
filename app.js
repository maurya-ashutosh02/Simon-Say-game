let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let btns  =["red","yellow","green","blue"];

let h2=document.querySelector("h2");
 
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;

    levelup();
}
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    

}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
    

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(randColor);
    gameseq.push(randColor);

    console.log(gameseq);
    btnFlash(randbtn);
}

function checkAns(idx){
    // console.log("curr level :" ,level);
   

    if(userseq[idx]==gameseq[idx]){
       if(userseq.length==gameseq.length){
       setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML=`Game Over!your score was<b> h${level}</b><br> Press any key to Restart!!`

        document.querySelector("body").style.color="red";
        setTimeout(function(){ document.querySelector("body").style.color="white";

        },150);
        reset();
    }

}
function btnPress(){
   let btn=this;
   userFlash(btn);
   userColor=btn.getAttribute("id");
   userseq.push(userColor);

   console.log(userseq);
   checkAns(userseq.length-1);


}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
