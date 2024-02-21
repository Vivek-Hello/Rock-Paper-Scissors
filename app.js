let usesrc = 0;
let comsrc = 0;

let choices = document.querySelectorAll(".choice");
let message=document.querySelector("#mes");
let usersbord=document.querySelector("#user-score");
let computerbord=document.querySelector("#comp-score");


let usercho = '';
let comcho='';

let reset =document.querySelector("#reset");
let mes=document.querySelector(".show");



reset.addEventListener("click",()=>{
    usesrc=0;
    comsrc=0;
    usersbord.innerHTML=usesrc;
    computerbord.innerHTML=comsrc;
    message.innerHTML="Play your move";
    message.style.backgroundColor="#211C6A";
    usermes.innerHTML='';
    compmes.innerHTML='';
})
const gencompcho=()=>{
    const ch=["rock","paper","scissor"];
    const random = Math.floor(Math.random()*3);
    return ch[random];
}
const draw=()=>{
    message.innerHTML="Its a Draw";
    message.style.backgroundColor="#211C6A";
    show();
};

const showwinner=(userwin)=>{
     if(userwin){
        message.style.backgroundColor="green";
        message.innerHTML="You win";
        usesrc++;
        usersbord.innerHTML=usesrc;
        computerbord.innerHTML=comsrc;
       show();
     }
     else{
        message.style.backgroundColor="red";
        message.innerHTML="Computer win";
        comsrc++;
        usersbord.innerHTML=usesrc;
        computerbord.innerHTML=comsrc;
      show()
     }
}
const playgame=(userchoice)=>{

     comcho=   gencompcho();
     console.log("the user choice is ",userchoice);
     console.log("the computer choice is ",comcho);
    
     if(userchoice===comcho){
         draw();
     }
     
     else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= comcho==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin= comcho==="scissor"?false:true;
        }
        else{
            userwin= comcho==="rock"?false:true;
        }
        showwinner(userwin);
     }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        usercho = choice.getAttribute("id");
        playgame(usercho);    
    });
});

function show() {
    mes.innerHTML=`<p>the computer choise is: ${comcho} </p> <p>the user choise is: ${usercho} </p>`
}