import React from "react";

import LogoRed from "../../images/logo/logo_red.png";
import LogoYellow from "../../images/logo/logo_yellow.png";
import LogoGreen from "../../images/logo/logo_green.png";
import LogoBW from "../../images/logo/logo_bw.png";
import { LogoImg } from "./logoStyle";
import { getThemeColor } from "../../utils/utils";

const Logo = ({ themecolor, width }) => {
    const getLogoTheme = getThemeColor(themecolor);
    let logoSrc;
    switch (getLogoTheme) {
        case "red":
            logoSrc = LogoRed;
            break;
        case "green":
            logoSrc = LogoGreen;
            break;
        case "yellow":
            logoSrc = LogoYellow;
            break;
        default:
            logoSrc = LogoBW;
            break;
    }
    return <LogoImg src={logoSrc} alt='Logo' width={width} />;
};

export default Logo;
