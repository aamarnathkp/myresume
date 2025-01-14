import { colors } from "./constants/colors";

export const calculateExperience = () => {
    const exp = Date.now() - new Date("04/01/2017");
    const expDate = new Date(exp);

    return Math.abs(expDate.getUTCFullYear() - 1970);
};

export const getThemeColor = (themeColor) => {
    return Object.keys(colors).find((key) => colors[key] === themeColor);
};

export const getColorBasedLogoSrc = (themeColor) => {
    const getColor = getThemeColor(themeColor);
    console.log("getColor", getColor);
    let logoSrc;
    switch (getColor) {
        case "green":
            logoSrc = "/src/images/logo/logo_green.png";
            break;
        case "red":
            logoSrc = "/src/images/logo/logo_red.png";
            break;
        default:
            logoSrc = "/src/images/logo/logo_yellow.png";
            break;
    }
    console.log("====SRC", logoSrc);
    return logoSrc;
};
