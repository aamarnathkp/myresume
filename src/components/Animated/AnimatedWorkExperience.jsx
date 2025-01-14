import React from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedWorkExperience = ({ value, currentTheme }) => {
    const [{ number }] = useSpring(
        () => ({
            from: { number: 0 },
            number: value,
            delay: 550,
            config: { tension: 200, friction: 100, mass: 2 },
        }),
        [currentTheme]
    );

    return (
        <span
            style={{
                width: "100%",
                color: currentTheme,
                textAlign: "center",
            }}>
            <span>{`Software engineer with `}</span>

            <animated.span>
                {number.to((n) => {
                    if (n === 0) return n.toFixed(0);
                    return `${n.toFixed(0)}+`;
                })}
            </animated.span>

            <span>{` years of Experience`}</span>
        </span>
    );
};

export default AnimatedWorkExperience;
