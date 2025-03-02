import {easeOutExpo} from './timing-functions.js';

export const animateTranslateY = ({element, from, to, duration = 1000, onStart, onFinished}) => {
    let unit = null;

    if (from.endsWith("%") && to.endsWith("%")) unit = "%";
    else if (from.endsWith("px") && to.endsWith("px")) unit = "px";
    else return;

    const a = parseFloat(from.replace(unit, ""));
    const b = parseFloat(to.replace(unit, ""));

    let startTime = null;

    const animate = (timestamp) => {
        if (!startTime) {
            startTime = timestamp;
            if (typeof onStart === "function") onStart();
        }

        let remaining = timestamp - startTime;

        let progress = Math.min(remaining / duration, 1);

        let transitionProgress = easeOutExpo(progress);

        let animationValue = a + transitionProgress * (b - a);

        element.style.transform = `translateY(${animationValue}${unit})`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.transform = `translateY(${b}${unit})`;
            if (typeof onFinished === "function") onFinished();
        }
    }

    requestAnimationFrame(animate);
};