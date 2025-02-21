let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const gencomp=()=>{
    const option=["rock","paper","scissor"];
      const idx=Math.floor(Math.random() * 3);
      return option[idx];
}
const userscore=document.querySelector("#user");
const compscore=document.querySelector("#comp");

const drawgame=()=>{
    // console.log("the game was draw");
    msg.innerText="game was draw : play again";
    msg.style.backgroundColor="black";

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user++;
        userscore.innerText=user;
        // console.log("you win");
        msg.innerText=`you win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        comp++
        compscore.innerText=comp;
        // console.log("you lose");
        msg.innerText=`you lose ${userchoice} beats your ${compchoice}`;
        msg.style.backgroundColor="red";

    }
}
const playgame=(userchoice)=>{
    // console.log("user choice =",userchoice);
    const compchoice=gencomp();
    // console.log("comp choice = ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false: true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}; 


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click" ,()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice)
        playgame(userchoice);
    });
});
