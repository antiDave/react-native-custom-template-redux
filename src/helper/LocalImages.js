import React from 'react';
import { heightSize } from "../constants/sizes";
import LogoSVG from "../../assets/images/svg/LOGO.svg";
import GoogleSVG from "../../assets/images/svg/GOOGLE.svg";
import FacebookSVG from "../../assets/images/svg/FACEBOOK.svg";

export const sizesSVGs = {
    social: heightSize._04,
    logo: heightSize._08,

}
export const SVGImage = {
    Logo() {
        return (<LogoSVG height={sizesSVGs.logo} width={sizesSVGs.logo} />)
    },
    Google() {
        return (<GoogleSVG height={sizesSVGs.social} width={sizesSVGs.social} />)
    },
    Facebook() {
        return (<FacebookSVG height={sizesSVGs.social} width={sizesSVGs.social} />)
    }
}

export default {
    // logo: require("../../assets/images/LOGO.png"),
}