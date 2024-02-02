import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { ExpIcons } from "../../InfoElements.js";
import ExperienceIcons from "../../ExperienceIcons.jsx";
import { experienceData } from "./experienceData.js";
import { useExpCardStyles } from "./expCardStyle.js";

const ExpCard = (props) => {
    console.log("PROPS", props);
    const classes = useExpCardStyles(props);
    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.heading}>
                {experienceData[props?.project].name}
                {/* <p className={classes.subHeading}>Company: Netstratum</p> */}
            </Typography>
            <Divider />
            {/* <Typography className={classes.subHeading}>Description</Typography> */}
            <Typography className={classes.description}>
                {experienceData[props?.project].projectDescription}
            </Typography>
            {/* <Typography className={classes.subHeading}>
                Roles & Activities
            </Typography>
            <Divider /> */}
            {/* <Typography className={classes.subHeading}>Skills used</Typography> */}
            <ExpIcons themecolor={props.color}>
                {experienceData[props?.project].skills.map((skill, key) => {
                    return <ExperienceIcons key={key} skill={skill} />;
                })}
            </ExpIcons>
        </Paper>
    );
};

export default ExpCard;
