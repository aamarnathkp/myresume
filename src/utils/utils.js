export const calculateExperience = () => {
    const exp = Date.now() - new Date("04/01/2017");
    const expDate = new Date(exp);

    return `${Math.abs(expDate.getUTCFullYear() - 1970)}+ years`;
};
