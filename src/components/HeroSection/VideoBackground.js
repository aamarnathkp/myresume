import React from "react";

import GreenVideo from "../../videos/video.mp4";
import YellowVideo from "../../videos/yellow.mp4";
import RedVideo from "../../videos/red.mp4";

import { HeroBg, VideoBg } from "./HeroElements";

const VideoBackground = ({ themecolor }) => {
    let video = null;
    switch (themecolor) {
        case "#01bf71":
            video = GreenVideo;
            break;
        case "#e6b800":
            video = YellowVideo;
            break;
        case "#e44f4f":
            video = RedVideo;
            break;
        default:
            video = GreenVideo;
            break;
    }

    return (
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
    );
};

export default VideoBackground;
