var timer =60;
var score =0;
var hitrn=0;

function incScore() {
  score+=10;
  document.querySelector("#scoreval").textContent=score;
}

function makeBubble(){
  var clutter = " ";
for (var i = 1; i<=189;i++) {
  var rn =Math.floor(Math.random()*10);
  clutter +=`<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit(){
hitrn= Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=hitrn;
}

function setTimer(){
  var timerint = setInterval(function(){
    if (timer>0){
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }

    else {clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML=`<h2>Game Over</h2>`;
    }
   
  }, 1000)
}

document.querySelector("#pbtm").addEventListener("click",
function(dets){
  var clickedNum = Number(dets.target.textContent);
  if(hitrn===clickedNum){
    incScore();
    getNewHit();
    makeBubble();
  }
});


setTimer();
makeBubble();
getNewHit();
