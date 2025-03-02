export const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

export const easeInQuad = (t) => t * t;

export const easeInOutQuad = (t) => t < 0.5
    ? 2 * t * t
    : 1 - Math.pow(-2 * t + 2, 2) / 2;

export const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export const easeInOutCubic = (t) => t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
