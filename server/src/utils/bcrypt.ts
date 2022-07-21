import bcrypt from "bcrypt"

const encryptPassword = async (password: string) => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(password, salt);

        return hashPassword;
    } catch (error) {
        console.log("Error while hashing the password.", error);
    }
};

const verifyPassword = async (password: string, hashedPassword: string) => {
    try {
        const verificationResult = await bcrypt.compare(password, hashedPassword)
        return verificationResult;
    } catch (error) {
        console.log("Error while veryfying the password.", error)
        return false;
    }
};



export { encryptPassword, verifyPassword };