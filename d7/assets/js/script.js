import {animateTranslateY} from "./animation";

const btnStartButton = document.getElementById('start-button');
const btnPauseButton = document.getElementById('pause-button');
const divTimer = document.getElementById('timer');
const inpCountdownValue = document.getElementById('countdownValue');

let intervalCountdown;

const startCountdown = (countdownValue) => {
    intervalCountdown = setInterval(() => {
        if (countdownValue > 0) {
            countdownValue--;
            divTimer.textContent = countdownValue.toString();
        }

        if (countdownValue === 0) {
            clearInterval(intervalCountdown);

            animateTranslateY({
                element: btnPauseButton,
                from: "-110%",
                to: "0%",
                duration: 1000,
                onStart: () => {
                    btnPauseButton.style.zIndex = "-1";
                },
            });

            countdownValue = -1;
        }
    }, 1000);
};

const pauseCountdown = () => {
    clearInterval(intervalCountdown);
    intervalCountdown = null;

    const i = btnPauseButton.querySelector("i")
    i.classList.remove("bx-pause");
    i.classList.add("bx-play");

    divTimer.dataset.paused = "paused";
};

const continueCountdown = () => {
    const i = btnPauseButton.querySelector("i")
    i.classList.remove("bx-play");
    i.classList.add("bx-pause");

    divTimer.removeAttribute("data-paused");

    let countdownValue = parseInt(divTimer.textContent);

    intervalCountdown = setInterval(() => {
        if (countdownValue > 0) {
            countdownValue--;
            divTimer.textContent = countdownValue.toString();
        }

        if (countdownValue === 0) {
            clearInterval(intervalCountdown);

            animateTranslateY({
                element: btnPauseButton,
                from: "-110%",
                to: "0%",
                duration: 1000,
                onStart: () => {
                    btnPauseButton.style.zIndex = "-1";
                },
            });

            countdownValue = -1;
        }
    }, 1000);
}


btnStartButton.addEventListener('click', () => {
    divTimer.textContent = inpCountdownValue.value;

    animateTranslateY({
        element: btnPauseButton,
        from: "0%",
        to: "-110%",
        duration: 500,
        onStart: () => {
            btnPauseButton.style.zIndex = "-1";
            clearInterval(intervalCountdown);
            startCountdown(parseInt(inpCountdownValue.value));
        },
        onFinished: () => {
            btnPauseButton.style.zIndex = "0";
        }
    });
});

btnPauseButton.addEventListener('click', () => {
    if (divTimer.dataset.paused === "paused") continueCountdown();
    else pauseCountdown();
});