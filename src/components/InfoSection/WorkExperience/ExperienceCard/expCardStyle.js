import { makeStyles } from "@material-ui/core/styles";

export const useExpCardStyles = makeStyles({
    paper: {
        padding: "8px 16px",
        width: "450px",

        borderRadius: "2rem",
        "@media (max-width: 780px)": {
            padding: "3px 8px",
            width: "200px",
            borderRadius: "0.3rem",
        },
        "@media (max-width: 625px)": {
            padding: "3px 8px",
            width: "80px",
            borderRadius: "0.3rem",
        },

        "&:hover": {
            transform: "scale(1.08)",
            transition: "all 0.2s ease-in-out",
        },
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
        padding: "0.5rem 0.5rem 0.2rem 0.5rem",
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
