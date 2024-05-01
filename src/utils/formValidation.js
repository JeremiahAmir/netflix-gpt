export const formValidation = (email, password) => {
    // const isNameValidated = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValidated = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(email);
    const isPasswordValidated =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if (!isNameValidated) return "Please Enter Valid Name";
    if (!isEmailValidated) return "Please Enter Valid Email";
    if (!isPasswordValidated)
        return "Password should be at least 8 characters long and should include at least one uppercase letter, one lowercase letter, one number and one special character";

    return null;
};
