
let computerNum = 0;
let clickbutton = document.getElementById("click-button");
let userinput = document.getElementById("user-input");
let resultarea = document.getElementById("result");
let resetbutton = document.getElementById("reset-button");
let chance = 5;
let chancenum = document.getElementById("chance-number")
let gameover = false;
let history = []

clickbutton.addEventListener("click", play)
resetbutton.addEventListener("click", reset)
userinput.addEventListener("focus", function(){
    userinput.value = "";
})

function ramdomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let uservalue = userinput.value;
    
    if (uservalue < 1 || uservalue > 100){
        resultarea.textContent = "1부터 100까지 내의 숫자를 입력하세요.";
        return;
    }
    if (history.includes(uservalue)){
        resultarea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력하세요.";
        return;
    }
    chance --;
    chancenum.textContent = `남은 기회는 ${chance}번`
    if(uservalue > computerNum) {
        resultarea.textContent = "다운";
    }else if(uservalue < computerNum) {
        resultarea.textContent = "업";
    }else if(uservalue = computerNum) {
        resultarea.textContent = "맞췄습니다";
        clickbutton.disabled = true;
    }

    history.push(uservalue)
    console.log(history)
    
    if(chance < 1) {
        gameover = true;
    }

    if(gameover == true) {
        clickbutton.disabled = true;
    }
}

function reset() {//
    resultarea.textContent = "숫자를 입력하세요."
    chancenum.textContent = "남은 기회는 5번"
    userinput.value = ""
    clickbutton.disabled = false;
    gameover = false;
    chance = 5;
    history.splice(0,5)
}

ramdomNum()
