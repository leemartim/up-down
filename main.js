//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤 번호를 맞추면, 맞췄습니다.
//랜덤번호가 < 유저번호 down
//랜덤번호가 > 유저번호 Up
//reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 끝난다. (버튼이 비활성화)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지않는다.

let computerNum = 0;
let clickbutton = document.getElementById("click-button");
let userinput = document.getElementById("user-input");
let resultarea = document.getElementById("result");
let resetbutton = document.getElementById("reset-button");
let chance = 5;
let chancenum = document.getElementById("chance-number")
let gameover = false;

clickbutton.addEventListener("click", play)
resetbutton.addEventListener("click", reset)

function ramdomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let uservalue = userinput.value;
    chance --;
    chancenum.textContent = `남은 기회는 ${chance}번`
    if(uservalue > 101) {
        chance ++;
        chancenum.textContent = `남은 기회는 ${chance}번`
        resultarea.textContent = "범위밖입니다";
    }else if(uservalue <= 0) {
        chance ++;
        chancenum.textContent = `남은 기회는 ${chance}번`
        resultarea.textContent = "범위밖입니다";
    }else if(uservalue > computerNum) {
        resultarea.textContent = "다운";
    }else if(uservalue < computerNum) {
        resultarea.textContent = "업";
    }else if(uservalue = computerNum) {
        resultarea.textContent = "맞췄습니다";
        clickbutton.disabled = true;
    }
    
    if(chance < 1) {
        gameover = true;
    }

    if(gameover == true) {
        clickbutton.disabled = true;
    }
}

function reset() {
    resultarea.textContent = "숫자를 입력하세요."
    chancenum.textContent = "남은 기회는 5번"
    userinput.value = ""
    clickbutton.disabled = false;
    gameover = false;
    chance = 5;
}

ramdomNum()