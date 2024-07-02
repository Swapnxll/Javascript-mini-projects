document.addEventListener('DOMContentLoaded', (event) => {

const box1 = document.getElementById('0');
const box2 = document.getElementById('1');
const box3 = document.getElementById('2');
const box4 = document.getElementById('3');
const box5 = document.getElementById('4');
const box6 = document.getElementById('5');
const box7 = document.getElementById('6');
const box8 = document.getElementById('7');
const box9 = document.getElementById('8');
const result= document.getElementById('result')

box1.addEventListener('click',show)
box2.addEventListener('click',show)
box3.addEventListener('click',show)
box4.addEventListener('click',show)
box5.addEventListener('click',show)
box6.addEventListener('click',show)
box7.addEventListener('click',show)
box8.addEventListener('click',show)
box9.addEventListener('click',show)


let currentplayer=1;
let arr = Array(9).fill(null);

function show(e){
    console.log(e);
    if(currentplayer==1){
    const img = document.createElement('img');
    img.src='./cross.png';
    e.target.appendChild(img);
    update(e,currentplayer); 
    
    currentplayer=0;
    }
    else{
        const img = document.createElement('img');
        img.src='./circle.png';
        e.target.appendChild(img);
        update(e,currentplayer); 
        
        currentplayer=1;
    }

}

function update(e,c){
    console.log(e.target.id);
    arr[e.target.id]=c;
    console.log(arr);
    check(c);
}

function check(c) {
    if (
        (arr[0] == c && arr[3] == c && arr[6] == c) || // First column
        (arr[0] == c && arr[4] == c && arr[8] == c) || // First diagonal
        (arr[3] == c && arr[4] == c && arr[5] == c) || // Second row
        (arr[6] == c && arr[7] == c && arr[8] == c) || // Third row
        (arr[1] == c && arr[4] == c && arr[7] == c) || // Second column
        (arr[2] == c && arr[5] == c && arr[8] == c) || // Third column
        (arr[2] == c && arr[4] == c && arr[6] == c)    // Second diagonal
    ) {
        if (c == 1) {
            console.log("cross win");
            result.textContent = "CROSS WINS"; 
            stopgame();
        }
        if (c == 0) {
            console.log("circle win");
            result.textContent = "CIRCLE WINS"; 
            stopgame();
        }
    }
}



function stopgame(){
    
        box1.removeEventListener('click', show);
        box2.removeEventListener('click', show);
        box3.removeEventListener('click', show);
        box4.removeEventListener('click', show);
        box5.removeEventListener('click', show);
        box6.removeEventListener('click', show);
        box7.removeEventListener('click', show);
        box8.removeEventListener('click', show);
        box9.removeEventListener('click', show);
    }
})