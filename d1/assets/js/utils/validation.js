export function isAlpha(value) {
    const alphaPattern = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/;
    if (!value) {
        return "Bu alan zorunludur.";
    } else if (!alphaPattern.test(value)) {
        return "Sadece harfler kullanılabilir.";
    }
    return null;
}

export function isEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
        return "E-posta adresi gereklidir.";
    } else if (!emailPattern.test(value)) {
        return "Geçerli bir e-posta adresi girin.";
    }
    return null;
}

export function isRequired(value) {
    if (!value || value.trim() === "") {
        return "Bu alan zorunludur.";
    }
    return null;
}

export function hasMinLength(value, min) {
    if (!value) {
        return `En az ${min} karakter girin.`;
    } else if (value.length < min) {
        return `En az ${min} karakter girin.`;
    }
    return null;
}

export function hasMaxLength(value, max) {
    if (value && value.length > max) {
        return `En fazla ${max} karakter girin.`;
    }
    return null;
}

export function isPhoneNumber(value) {
    const cleanedValue = value.replace(/\D/g, '');

    if (!cleanedValue) {
        return "Telefon numarası gereklidir.";
    } else if (cleanedValue.length !== 10) {
        return "Geçerli bir telefon numarası girin.";
    }
    return null;
}

export function isStrongPassword(value) {
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!value) {
        return "Şifre gereklidir.";
    } else if (!strongPasswordPattern.test(value)) {
        return "Şifre en az 8 karakter olmalı, bir büyük harf, bir küçük harf ve bir rakam içermelidir.";
    }
    return null;
}

export function isNumeric(value) {
    if (!value) {
        return "Bu alan zorunludur.";
    } else if (isNaN(value)) {
        return "Geçerli bir sayı girin.";
    }
    return null;
}

export function isMatching(value, matchValue) {
    if (value !== matchValue) {
        return "Parolalar eşleşmiyor.";
    }
    return null;
}
