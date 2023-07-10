//Global var

const time_el = document.querySelector('.principal__Clock .principal__Time');
const stop_btn = document.getElementById('Stop');
const start_btn = document.getElementById('Start');
const reset_btn = document.getElementById('Reset');

let seconds = 220;
let intervals = null;

//Events

//Timer Update

function timer() {
    seconds++;

    let sec = seconds % 60;
    let min = Math.floor(seconds / 60);
    let hr = Math.floor(seconds / 3600);

    time_el = elementinner.HTML = '${ hr } : ${ min } : ${ sec }';

}

timer();