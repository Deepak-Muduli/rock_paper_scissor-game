let comp_score=0;
let user_score=0;
const gencompchoice=()=>{
    const options=['rock','paper','scissor'];
    const randindex=Math.floor(Math.random()*3);
    return options[randindex];
}
const drawgame=()=>{
    console.log('draw game');
    msg.innerText='draw game play again';
}
const showwinner=(userwin)=>{
    if(userwin){
        user_score++;
        userscore.innerText=user_score;
        console.log('you win!');
        msg.innerText='you win';
    }
    else{
        comp_score++;
        compscore.innerText=comp_score;
        console.log('you loss!');
        msg.innerText='you lose';
    }
}
const playgame =(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=='rock'){
            userwin=compchoice=='paper'?false:true;
        }
        else if(userchoice=='paper'){
            userwin=compchoice=='scissor'?false:true;
        }
        else{
            userwin=compchoice=='rock'?false:true;
        }
        showwinner(userwin);
    }

}
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');
let userscore=document.querySelector('#userscore');
let compscore=document.querySelector('#compscore');
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        // console.log('choice was clicked',choice_id);
        playgame(userchoice);
    });
});
