function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{6,}$)/.test(password);
}