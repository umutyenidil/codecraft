export function setInputError(fieldId, error) {
    const input = document.getElementById(fieldId);

    const inputWrapper = input.closest(".input-wrapper");

    const span = inputWrapper.querySelector('span');

    if (error) {
        span.innerText = error;
        inputWrapper.classList.add("invalid");
    } else {
        span.innerText = "";
        inputWrapper.classList.remove("invalid");
    }
}

