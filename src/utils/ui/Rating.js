import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const StyledRating = withStyles({
    iconEmpty: {
        color: "#fff",
    },
    iconFilled: {
        color: "red",
    },
    iconHover: {
        color: "red",
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: "Very Dissatisfied",
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: "Dissatisfied",
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: "Neutral",
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: "Satisfied",
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Very Satisfied",
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

const CustomizedRatings = (props) => {
    return (
        <Box component='fieldset' mb={3} borderColor='transparent'>
            <Typography component='legend'>{props.label}</Typography>
            <StyledRating
                name='customized-icons'
                onChange={props.onChange}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
            />
        </Box>
    );
};

export default CustomizedRatings;
