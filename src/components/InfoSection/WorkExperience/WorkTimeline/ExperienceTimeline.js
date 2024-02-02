import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Typography from "@material-ui/core/Typography";

import ExpCard from "../ExperienceCard/ExpCard.jsx";
import { experienceData } from "../ExperienceCard/experienceData.js";
import { useTimelineStyles } from "./timelineStyle.js";

export default function ExperienceTimeline(props) {
    const classes = useTimelineStyles(props);
    return (
        <Timeline align='alternate' style={{ paddingTop: "1.5rem" }}>
            {Object.keys(experienceData).map((expKey, index) => {
                return (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent className={classes.opppaper}>
                            <Typography
                                variant='body2'
                                color='inherit'
                                className={classes.year}>
                                {experienceData[expKey]?.duration}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot
                                variant='outlined'
                                className={classes.icon}>
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector
                                className={classes.secondaryTail}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <ExpCard project={expKey} {...props} />
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
}
