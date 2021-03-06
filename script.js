window.onload = function() {
    let mins = '00';
    let seconds = '00';
    let tens = '00';

    let appendMins = document.getElementById('mins');
    let appendTens = document.getElementById('tens');
    let appendSeconds = document.getElementById('seconds');
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonCircle = document.getElementById('button-circle')
    let buttonReset = document.getElementById('button-reset');
    let Interval;

    buttonStart.onclick = start;
    buttonStop.onclick = function() {
        clearInterval(Interval)
    }
    buttonCircle.onclick = function() {
        let resultPrinter = document.getElementById("result-printer");
        let resultEl = document.createElement('p');
        resultEl.innerHTML = `${mins}:${seconds}:${tens}`
        resultPrinter.appendChild(resultEl)
    }

    buttonReset.onclick = reset;

    function reset() {
        clearInterval(Interval);
        mins = '00';
        tens = '00';
        seconds = '00';
        appendMins.innerHTML = mins;
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        document.getElementById("result-printer").innerHTML = "";
    }

    function start() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }

    function startTimer() {
        tens++;
        if (tens < 9) {
            appendTens.innerHTML = '0' + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            console.log('minutes');
            mins++;
            appendMins.innerHTML = '0' + mins;
            seconds = 0;
            appendSeconds.innerHTML = '0' + seconds;
        }
    }
}