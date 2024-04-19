let computer_score=0
let user_score=0

const choices=document.querySelectorAll(".choice")

const getCompChoice=()=>
{
    options=["rock","paper","scissor"]
    const num=Math.floor(Math.random()*3);
    return options[num]
}

const msg=document.querySelector("#msg")

const com=document.querySelector("#computer-score")

const  user=document.querySelector("#user-score ")

const drawGame=()=>{
    msg.innerText="Game draw !!";
    msg.style.backgroundColor="black"

}

showWinner=(userWin)=>
{
if(userWin){
    msg.innerText="you won !!";
    msg.style.backgroundColor="green"
    user_score++
    user.innerText=user_score
}
else{
    msg.innerText="you lost !!"
    msg.style.backgroundColor="red"
    computer_score++
    com.innerText=computer_score
}

}

const playGame=(userChoice)=>
{
    const compChoice=getCompChoice();
    if(userChoice===compChoice){
        drawGame()
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin)
    }   
}


choices.forEach((choice)=>{
choice.addEventListener('click',()=>
{
    const choiceId=choice.getAttribute("id")
    playGame(choiceId)
}
)
})