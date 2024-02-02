import { makeStyles } from "@material-ui/core/styles";

export const useTimelineStyles = makeStyles({
    paper: {
        padding: "6px 16px",
        width: "450px",
        "@media (max-width: 780px)": {
            padding: "3px 8px",
            width: "200px",
        },
        "@media (max-width: 625px)": {
            padding: "3px 8px",
            width: "80px",
        },
    },
    opppaper: {
        margin: "15px",
        width: "450px",
        "@media (max-width: 780px)": {
            margin: "1px",
            // width: '100px'
        },
        "@media (max-width: 625px)": {
            width: "65px",
        },
    },
    secondaryTail: {
        backgroundColor: (props) => props.color, //'#01bf71',
    },
    icon: {
        color: (props) => props.color, //'#01bf71'
    },
    heading: {
        fontWeight: "bold",
        fontSize: "1.3rem",
        padding: "5px",
        textAlign: "center",
        "@media (max-width: 780px)": {
            fontSize: "0.9rem",
        },
        "@media (max-width: 625px)": {
            fontSize: "0.6rem",
        },
    },
    subHeading: {
        fontWeight: "normal",
        fontSize: "1rem",
        padding: "5px",
        textAlign: "center",
        "@media (max-width: 780px)": {
            fontSize: "0.9rem",
        },
        "@media (max-width: 625px)": {
            fontSize: "0.6rem",
        },
    },
    description: {
        textAlign: "left",
        padding: "4px",
        "@media (max-width: 780px)": {
            display: "none",
        },
    },
    year: {
        "@media (max-width: 780px)": {
            fontSize: "0.9rem",
        },
        "@media (max-width: 480px)": {
            fontSize: "0.6rem",
        },
    },
});
